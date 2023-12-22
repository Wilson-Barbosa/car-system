import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/models/Car';

@Component({
    selector: 'app-register-car',
    templateUrl: './register-car.component.html',
    styleUrls: ['./register-car.component.css']
})
export class RegisterCarComponent {

    // Attribute that stores information on a single car
    @Input()
    public car: Car = {} as Car;


    // Event Emitter that will be send to the father component
    // The @Output() decorator is necessary to achieve this goal
    @Output()
    public registerCarEmitter = new EventEmitter;


    // Method that saves a new car
    // The informartion will be then send to the listing cars component
    public saveCar(){
        this.registerCarEmitter.emit();
    }

}
