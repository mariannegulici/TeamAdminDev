import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectSearchDispatcherService } from '../dispatcher-services/project-search.dispatcher.service';

@Component({
  selector: 'app-statistics', 
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [],
  animations: []
})
export class StatisticsComponent implements OnInit {

    showAddNewWidget: Boolean = false;
    showEfldWidget: Boolean = false;

    constructor(private projectSearchDispatcherService: ProjectSearchDispatcherService) {}

    ngOnInit() {
        this.projectSearchDispatcherService.toggleToolbarSearchVisibility(true);
    }

    showWidgetsSelection() {
        if (this.showEfldWidget) this.showEfldWidget = false;
        this.showAddNewWidget = true;
    }

    showCustomWidget() {
        if (this.showAddNewWidget) this.showAddNewWidget = false;
        this.showEfldWidget = true;
    }
}