import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })


export class CarAddService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

    addCar(data: { name: string;
      city: string;
      gearbox: string;
      doors: string;
      fuel: string;
      people: string;
      condition: string;
      price: number;
      imageUrl: string;}) {
        return this.http.post(`${this.baseUrl}/car/add`, data);
      }

}