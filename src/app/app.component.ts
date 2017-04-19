import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { MdToolbar, MdSidenav } from "@angular/material";
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectSearchDispatcherService, SearchModel } from './dispatcher-services/project-search.dispatcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bootstrapAnimation', [
      state('*', style({
        opacity: 1
      })),
      transition(':enter' , [
        style({
          opacity: 0
        }),
        animate('.3s ease-in')
      ])
    ]),
    trigger('showToolbarSearchAnimation', [
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
export class AppComponent implements OnInit, OnDestroy {
  dynamicTitle : String = "Team Admin";
  showSearchResults: Boolean = false;
  toggleToolbarSearch: Boolean = false;
  initialSearchValue: String = "";
  projectSearchSubscription: any = null;

  @HostBinding('@bootstrapAnimation') bootstrapAnimation = true;

  constructor(private router: Router, private projectSearchDispatcherService: ProjectSearchDispatcherService) {}

  ngOnInit() {
    this.subscribeToSearchInputStream();
  }

  ngOnDestroy() {
    this.projectSearchSubscription.unsubscribe();
  }

  /**
   * Subscribe to search input Observable from /shared/ProjectSearchService
   */
  subscribeToSearchInputStream() {
    this.projectSearchSubscription = this.projectSearchDispatcherService
    .searchValue
    .subscribe(
        (value: SearchModel) => {
            if (typeof value != "undefined") {
              if (typeof value.searchInputValue != "undefined") this.initialSearchValue = value.searchInputValue;
              if (typeof value.showHideSearchComponent != "undefined") this.showSearchResults = value.showHideSearchComponent;
              if (typeof value.showHideToolbarSearch != "undefined") this.toggleToolbarSearch = value.showHideToolbarSearch;
            }
        },
        error => console.warn(error)
    );
  }

  searchForProjects(searchBoxValue) {
    if (searchBoxValue == "") return false;
    this.projectSearchDispatcherService.searchInput(searchBoxValue);
  }

  /**
   * Perform routing requests for AppComponent
   * 
   * @param {string} theRoutePath
   */
  gotoModule(theRoutePath:string) {
    this.router.navigate([`/${theRoutePath}`]);
  }
}