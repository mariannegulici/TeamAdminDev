import { Component } from '@angular/core';
import { MdToolbar, MdSidenav } from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dynamicTitle : string = "Team Admin";

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