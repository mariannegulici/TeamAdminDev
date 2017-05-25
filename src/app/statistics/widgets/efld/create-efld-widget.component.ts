import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { CreateEfldWidgetService } from './create-efld-widget.service';

@Component({
  selector: 'create-widget-efld', 
  templateUrl: './create-efld-widget.component.html',
  styleUrls: ['./create-efld-widget.component.css'],
  providers: [CreateEfldWidgetService],
  animations: [
      trigger('createWidgetAnimation', [
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
export class CreateEfldWidgetComponent implements OnInit {

    @HostBinding('@createWidgetAnimation') createWidgetAnimation = true;
    teamsDataSubscription: any = null;
    displayedTeamsData: Array<any> = [];
    
    constructor(private createEfldWidgetService: CreateEfldWidgetService) {}

    ngOnInit() {
        this.getAvailableTeams();
    }

    getAvailableTeams() {
        this.teamsDataSubscription = this.createEfldWidgetService.getAllTeams()
        .pluck('data', 'teams')
        .subscribe((queryResult: any) => {
            this.displayedTeamsData = queryResult;
        });
    }

    onSubmit(form: NgForm, event: Event) {
        event.preventDefault();
        console.log(form.value);
    }
}