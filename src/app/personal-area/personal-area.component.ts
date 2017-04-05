import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service, Product } from './personal-area.service';

@Component({
  selector: 'app-personal-area', 
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
  providers: [Service],
  animations: []
})
export class PersonalAreaComponent {
    teamSchema: Product[];

    constructor(service: Service) {
        this.teamSchema = service.getProducts();
    }

    showEmployeeInfo(event) {
        console.log(event);
    }

    onSubmit(form: NgForm, event: Event) {
        event.preventDefault();
        console.log(form.value);
    }
}