import { Component, OnInit } from '@angular/core';
import { ProjectSearchDispatcherService } from '../dispatcher-services/project-search.dispatcher.service';

@Component({
  selector: 'app-landing-page', 
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [],
  animations: []
})
export class LandingPageComponent implements OnInit {

  constructor(private projectSearchDispatcherService: ProjectSearchDispatcherService) {}

  ngOnInit() {
    this.projectSearchDispatcherService.toggleToolbarSearchVisibility(false);
  }

  searchProjects(searchBoxValue) {
    if (searchBoxValue == "") return false;
    this.projectSearchDispatcherService.searchInput(searchBoxValue);
  }
}