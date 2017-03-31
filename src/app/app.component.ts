import { Component, HostBinding } from '@angular/core';
import { MdToolbar, MdSidenav } from "@angular/material";
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bootstrapAnimation', [
      state('*', style({
        opacity: 1
      })),
      transition(':enter' , [
        style({
          opacity: 0
        }),
        animate('.3s ease-in')
      ])
    ])
  ]
})
export class AppComponent {
  dynamicTitle : string = "Team Admin";

  @HostBinding('@bootstrapAnimation') bootstrapAnimation = true;

  constructor(private router: Router) {}

  /**
   * Perform routing requests for AppComponent
   * 
   * @param {string} theRoutePath
   */
  gotoModule(theRoutePath:string) {
    this.router.navigate([`/${theRoutePath}`]);
  }
}