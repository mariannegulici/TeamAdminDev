import { Component, HostBinding, HostListener, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SearchDetailsService } from './search-details.service';

@Component({
  selector: 'project-search-details', 
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css'],
  providers: [SearchDetailsService],
  animations: [
      trigger('searchDetailsAnimation', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition(':enter' , [
        style({
          transform: 'translateX(+100%)'
        }),
        animate('.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ]),
      transition(':leave' , [
        animate( '.5s cubic-bezier(0.215, 0.61, 0.355, 1)', style({ transform: 'translateX(+100%)' }) )
      ])
    ])
  ]
})
export class ProjectsSearchDetailsComponent implements OnInit, OnDestroy {

    @Input('projectID') private projectID: number;
    @Input('projectName') private projectName: String;
    @Output() closeDetails = new EventEmitter<Boolean>();
    @Output() closeDetailsAnimationDone = new EventEmitter<Boolean>();

    showLoadingSpinner: Boolean = true;
    projectDataSubscription: any = null;
    displayedProjectData: Array<any> = [];

    constructor(private searchDetailsService: SearchDetailsService) {}

    @HostBinding('@searchDetailsAnimation') searchDetailsAnimation = true;
    @HostListener('@searchDetailsAnimation.done') animationDone() {
        this.closeDetailsAnimationDone.emit(true);
    }

    ngOnInit() {
        console.log("SearchDetails enabled");
        this.searcProjectByID(this.projectID);
    }

    searcProjectByID(ID: number) {
        if (!this.showLoadingSpinner) this.showLoadingSpinner = true;
        this.projectDataSubscription = this.searchDetailsService.getProjectByID(ID)
        .pluck('data', 'projectByID')
        .subscribe((queryResult: any) => {
            this.showLoadingSpinner = false;
            this.displayedProjectData = queryResult;
            console.log(this.displayedProjectData);
        });
    }

    closeSearchDetails() {
        this.closeDetails.emit(true);
    }

    ngOnDestroy() {
        console.log("SearchDetails disabled");
        this.projectDataSubscription.unsubscribe();
        this.animationDone();
    }
}