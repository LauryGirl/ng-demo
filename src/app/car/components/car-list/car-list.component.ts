import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarModel } from '../../models/car.models';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent implements OnInit {
  cars: CarModel[] = [];
  messageError = '';
  isLoading = true;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe({
      next: (cars) => {
        console.log('Fetched cars:', cars);
        this.cars = cars;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
        this.isLoading = false;
        this.messageError = 'Failed to load car manufacturers. Please try again later.';
      }
    });    
  }
}
