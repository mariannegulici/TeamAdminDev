import { Component } from '@angular/core';
import { ProjectSearchService } from '../shared/project-search.service';

@Component({
  selector: 'app-landing-page', 
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [],
  animations: []
})
export class LandingPageComponent {

  constructor(private projectSearchService: ProjectSearchService) {}

  searchProjects(searchBoxValue) {
    if (searchBoxValue == "") return false;
    this.projectSearchService.searchInput(searchBoxValue);
  }
}