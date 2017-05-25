import { Component, HostBinding, HostListener, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'project-search-options', 
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css'],
  providers: [],
  animations: [
      trigger('searchOptionsAnimation', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition(':enter' , [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('.5s cubic-bezier(0.23, 1, 0.32, 1)')
      ]),
      transition(':leave' , [
        animate( '.5s cubic-bezier(0.215, 0.61, 0.355, 1)', style({ transform: 'translateX(-100%)' }) )
      ])
    ])
  ]
})
export class ProjectsSearchOptionsComponent implements OnInit, OnDestroy {

    @Output() closeOptions = new EventEmitter<Boolean>();
    @Output() closeOptionsAnimationDone = new EventEmitter<Boolean>();

    constructor() {}

    @HostBinding('@searchOptionsAnimation') searchOptionsAnimation = true;
    @HostListener('@searchOptionsAnimation.done') animationDone() {
        this.closeOptionsAnimationDone.emit(true);
    }

    ngOnInit() {
        console.log("SearchOptions enabled");
    }

    closeSearchOptions() {
        this.closeOptions.emit(true);
    }

    ngOnDestroy() {
        console.log("SearchOptions disabled");
        this.animationDone();
    }
}