import { Component, HostBinding, HostListener, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectSearchDispatcherService, SearchModel } from '../dispatcher-services/project-search.dispatcher.service';
import { ProjectSearchService } from './project-search.service';

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
    ])
  ]
})
export class ProjectSearchComponent {

    showLoadingSpinner: Boolean = true;
    searchDataSubscription: any = null;
    projectSearchSubscription: any = null;
    searchInputValue: String = "";
    displayedSearchData: Array<any> = [];

    @HostBinding('@searchOverlayAnimation') searchOverlayAnimation = true;
    @HostListener('@searchOverlayAnimation.done') animationDone() {}

    constructor(private projectSearchDispatcherService: ProjectSearchDispatcherService, private projectSearchService: ProjectSearchService) {}

    ngOnInit() {
        this.subscribeToSearchInputStream();
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
        .subscribe(queryResult => {
            this.showLoadingSpinner = false;
            this.displayedSearchData = queryResult.data.searchForProject;
        });
    }

    closeProjectSearch() {
        let getModulePathName = window.location.pathname.replace('/','');
        this.projectSearchDispatcherService.closeProjectSearchComponent(getModulePathName);
    }
    
    ngOnDestroy() {
        this.searchDataSubscription.unsubscribe();
        this.projectSearchSubscription.unsubscribe();
    }
}