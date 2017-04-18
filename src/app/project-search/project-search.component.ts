import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectSearchService } from '../shared/project-search.service';

@Component({
  selector: 'app-project-search', 
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css'],
  providers: [],
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

    @HostBinding('@searchOverlayAnimation') searchOverlayAnimation = true;

    constructor(private projectSearchService: ProjectSearchService) {}

    closeProjectSearch() {
        this.projectSearchService.closeProjectSearchComponent();
    }
}