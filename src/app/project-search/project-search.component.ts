import { Component, HostBinding, HostListener, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectSearchDispatcherService, SearchModel } from '../dispatcher-services/project-search.dispatcher.service';
import { ProjectSearchService } from './project-search.service';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

@Component({
  selector: 'app-project-search', 
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css'],
  providers: [ProjectSearchService],
  animations: [
      trigger('searchOverlayAnimation', [
      state('*', style({ 
        transform: 'translateY(0)'
      })),
      transition(':enter' , [
        style({
          transform: 'translateY(-100%)'
        }),
        animate('.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)')
      ]),
      transition(':leave' , [
        animate( '.6s cubic-bezier(0.215, 0.61, 0.355, 1)', style({ transform: 'translateY(-100%)' }) )
      ])
    ]),
    trigger('showActionButtonsAnimation', [
      state('*', style({
        opacity: 1
      })),
      transition(':enter' , [
        style({
          opacity: 0
        }),
        animate('.10s ease-in')
      ]),
      transition(':leave' , [
        animate( '.10s ease-in', style({ opacity: 0 }) )
      ])
    ]),
    trigger('showSearchResultsAnimation', [
      state('*', style({
        opacity: 1
      })),
      transition(':enter' , [
        style({
          opacity: 0
        }),
        animate('.15s ease-in')
      ]),
      transition(':leave' , [
        animate( '.15s ease-in', style({ opacity: 0 }) )
      ])
    ])
  ]
})
export class ProjectSearchComponent implements OnInit, OnDestroy, AfterViewChecked {

    enableComponentSwitching: Boolean = false;
    showSearchActionButtons: Boolean = false;
    showSearchOptionsToggle: Boolean = false;
    showSearchResultsToggle: Boolean = true;
    showSearchDetailsToggle: Boolean = false;
    // 1 - Search Options
    // 2 - Search Details
    markComponentToShow: number = 0;
    showLoadingSpinner: Boolean = true;
    searchDataSubscription: any = null;
    projectSearchSubscription: any = null;
    searchInputValue: String = "";
    displayedSearchData: Array<any> = [];
    previousFocusedListItem: number = null;
    copyToClipboard: Boolean = true;
    projectIDForEdit: number = null;
    projectNameForEdit: String = "";

    @HostBinding('@searchOverlayAnimation') searchOverlayAnimation = true;
    @HostListener('@searchOverlayAnimation.done') animationDone() {}

    constructor(private projectSearchDispatcherService: ProjectSearchDispatcherService, private projectSearchService: ProjectSearchService, private cdRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.subscribeToSearchInputStream();
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

    subscribeToSearchInputStream() {
        this.projectSearchSubscription = this.projectSearchDispatcherService
        .searchValue
        .subscribe(
            (value: SearchModel) => {
                if (typeof value != "undefined") {
                    if (typeof value.searchInputValue != "undefined") {
                        this.searchInputValue = value.searchInputValue;
                        this.searcProjectsByKeyword(this.searchInputValue);
                    }
                }
            },
            error => console.warn(error)
        );
    }

    searcProjectsByKeyword(keyWord: String) {
        if (!this.showLoadingSpinner) this.showLoadingSpinner = true;
        this.searchDataSubscription = this.projectSearchService.getProjectsByKeyword(keyWord)
        .pluck('data', 'searchForProject')
        .subscribe((queryResult: any) => {
            this.showLoadingSpinner = false;
            this.displayedSearchData = queryResult.map((value:Object)=>{
                let mapNewObject = {};
                mapNewObject['searchValue'] = value;
                mapNewObject['showActions'] = false;
                return mapNewObject;
            });
        });
    }

    closeProjectSearch() {
        let getModulePathName = window.location.pathname.replace('/','');
        this.projectSearchDispatcherService.closeProjectSearchComponent(getModulePathName);
    }

    showSearchOptions() {
        this.markComponentToShow = 1;
        this.enableComponentSwitching = true;
        this.showSearchResultsToggle = false;
    }

    closeSearchOptions(event) {
        this.enableComponentSwitching = true;
        this.showSearchOptionsToggle = false;
    }

    closeSearchOptionsAnimationsDone(event) {
        if (this.enableComponentSwitching) {
            this.showSearchResultsToggle = true;
            this.enableComponentSwitching = false;
        }
    }

    toggleProjectActions(index: number) {
        if (this.displayedSearchData[index].showActions) {
            this.displayedSearchData[index].showActions = false
            if (this.previousFocusedListItem != null) this.displayedSearchData[this.previousFocusedListItem].showActions = true
        }
        else {
            this.displayedSearchData[index].showActions = true
            if (this.previousFocusedListItem != null) this.displayedSearchData[this.previousFocusedListItem].showActions = false
        }
        this.previousFocusedListItem = index;
    }

    toggleCopyClipboard(event) {
        this.copyToClipboard = event.checked;
    }

    showSearchResultsAnimationEnded(event) {
        if (this.enableComponentSwitching) {
            if (this.markComponentToShow == 1) {
                this.showSearchOptionsToggle = true;
                this.enableComponentSwitching = false;
            } else if (this.markComponentToShow == 2) {
                this.showSearchDetailsToggle = true;
                this.enableComponentSwitching = false;
            }
        }
    }

    showSearchDetails(projectID, projectName) {
        this.projectIDForEdit = projectID;
        this.projectNameForEdit = projectName;
        this.markComponentToShow = 2;
        this.enableComponentSwitching = true;
        this.showSearchResultsToggle = false;
    }
    
    ngOnDestroy() {
        this.searchDataSubscription.unsubscribe();
        this.projectSearchSubscription.unsubscribe();
    }
}