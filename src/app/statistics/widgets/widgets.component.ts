import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'widgets', 
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  providers: [],
  animations: [
      trigger('showWidgetsSelectionScreenAnimation', [
      state('*', style({
        opacity: 1
      })),
      transition(':enter' , [
        style({
          opacity: 0
        }),
        animate('.15s ease-in')
      ]),
      transition(':leave' , [
        animate( '.15s ease-in', style({ opacity: 0 }) )
      ])
    ])
  ]
})
export class WidgetsComponent implements OnInit {

    widgetsHeaderTitle: String = "";
    showWidgetsSelectionScreen: Boolean = true;
    showCreateEfldWidget: Boolean = false;

    @HostBinding('@showWidgetsSelectionScreenAnimation') showWidgetsSelectionScreenAnimation = true;
    
    constructor() {}

    ngOnInit() {
        this.widgetsHeaderTitle = "Available Widgets";
    }

    showWidgetCreateScreen(widget: String) {
        switch (widget) {
            case 'efld':
                this.widgetsHeaderTitle = "Create new EFLD widget"
                this.showWidgetsSelectionScreen = false;
                this.showCreateEfldWidget = true;
                break;
            default:
                break;
        }
    }

    backToWidgetsSelectionScreen() {
        this.widgetsHeaderTitle = "Available Widgets";
        this.showWidgetsSelectionScreen = true;
        if (this.showCreateEfldWidget) this.showCreateEfldWidget = false;
    }
}