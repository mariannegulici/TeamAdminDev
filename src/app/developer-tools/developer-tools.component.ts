import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectSearchDispatcherService } from '../dispatcher-services/project-search.dispatcher.service';
import { DeveloperToolsService } from './developer-tools.service';

@Component({
  selector: 'app-developer-tools', 
  templateUrl: './developer-tools.component.html',
  styleUrls: ['./developer-tools.component.css'],
  providers: [],
  animations: []
})
export class DeveloperToolsComponent implements OnInit {

    showTeamsToggle: Boolean = false;
    displayedTeamsData: Array<any> = [];
    teamsDataSubscription: any = null;
    showLoadingSpinner: Boolean = false;

    constructor(private projectSearchDispatcherService: ProjectSearchDispatcherService, private developerToolsService: DeveloperToolsService) {}

    ngOnInit() {
        this.projectSearchDispatcherService.toggleToolbarSearchVisibility(true);
    }

    showTeamsForm() {
        if (!this.showLoadingSpinner) this.showLoadingSpinner = true;
        this.teamsDataSubscription = this.developerToolsService.getAllTeams()
        .pluck('data', 'teams')
        .subscribe((queryResult: any) => {
            this.showLoadingSpinner = false;
            this.showTeamsToggle = true;
            this.displayedTeamsData = queryResult;
            console.log(queryResult);
        });
    }
}