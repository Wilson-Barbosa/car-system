import { Component } from '@angular/core';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent {
    
    // Storage array containing each car's information
    // It will be displayed on the screen
    public carListing: Car[] = [
        {
            id: 1,
            model: "Fiat Uno",
            manufacturer: "Fiat",
            price: 20000,
            year: 2012
        },
        {
            id: 2,
            model: "Kia Sportage",
            manufacturer: "Kia Motors",
            price: 25000,
            year: 2021
        }
    ];
}
