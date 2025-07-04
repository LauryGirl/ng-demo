import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, tap } from 'rxjs';
import { CarModel, CarResponse } from '../models/car.models';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getCars() : Observable<CarModel[]> {
    return this.httpClient.get<CarResponse>(`${this.apiUrl}/vehicles/getallmanufacturers?format=json`).pipe(
      map(response  => {
        console.log('CarService: Fetched cars', response, response.Results);

        if(response && response.Results){
          return response.Results;
        }
        return [];
      })
    );
  }

}
