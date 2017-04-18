import { Component, HostBinding, OnInit } from '@angular/core';
import { MdToolbar, MdSidenav } from "@angular/material";
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectSearchService, SearchModel } from './shared/project-search.service';

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
    ])
  ]
})
export class AppComponent implements OnInit {
  dynamicTitle : String = "Team Admin";
  showSearchResults: Boolean = false;

  @HostBinding('@bootstrapAnimation') bootstrapAnimation = true;

  constructor(private router: Router, private projectSearchService: ProjectSearchService) {}

  ngOnInit() {
    this.catchSearchInputStream();
  }

  catchSearchInputStream() {
    this.projectSearchService
    .searchValue
    .subscribe(
        (value: SearchModel) => {
            console.log(value.searchInputValue);
            this.showSearchResults = value.showHideComponent;
        },
        error => console.log(error)
    );
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