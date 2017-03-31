import { Component } from '@angular/core';
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
}