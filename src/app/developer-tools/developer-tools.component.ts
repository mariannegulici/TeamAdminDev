import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectSearchDispatcherService } from '../dispatcher-services/project-search.dispatcher.service';

@Component({
  selector: 'app-developer-tools', 
  templateUrl: './developer-tools.component.html',
  styleUrls: ['./developer-tools.component.css'],
  providers: [],
  animations: []
})
export class DeveloperToolsComponent implements OnInit {

    constructor(private projectSearchDispatcherService: ProjectSearchDispatcherService) {}

    ngOnInit() {
        this.projectSearchDispatcherService.toggleToolbarSearchVisibility(true);
    }
}