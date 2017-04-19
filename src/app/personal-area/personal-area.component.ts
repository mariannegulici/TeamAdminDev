import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service, Product } from './personal-area.service';
import { ProjectSearchDispatcherService } from '../dispatcher-services/project-search.dispatcher.service';

@Component({
  selector: 'app-personal-area', 
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
  providers: [Service],
  animations: []
})
export class PersonalAreaComponent implements OnInit {
    teamSchema: Product[];

    constructor(service: Service, private projectSearchDispatcherService: ProjectSearchDispatcherService) {
        this.teamSchema = service.getProducts();
    }

    ngOnInit() {
        this.projectSearchDispatcherService.toggleToolbarSearchVisibility(true);
    }

    showEmployeeInfo(event) {
        console.log(event);
    }

    onSubmit(form: NgForm, event: Event) {
        event.preventDefault();
        console.log(form.value);
    }
}