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


    // This attribute will receive the information from the form-component
    public car: Car = {} as Car;


    // Method that renders a new car to the table
    public saveCar(): void {
        // Adding the proper Id for the new car
        this.car.id = this.carListing.length + 1;
        // Pushing it to the array
        this.carListing.push(this.car);
        // Reseting the car object (clears the field)
        this.car = {} as Car;
    }


    // Method that deletes a car from the table
    public deleteCar(car: Car): void {

        let index = car.id - 1;             // The id from the car is stored within this variable
        this.carListing.splice(index, 1);   // Removes one item from the appointed index

        // Now to ajust the IDs on the table
        // Without this the splice method won't work properly on the last item on the table
        for(let i = 0; i < this.carListing.length; i++){
            this.carListing[i].id = i + 1;
        }

    }
}
