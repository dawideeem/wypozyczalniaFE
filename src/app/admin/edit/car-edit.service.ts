import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

  

export class CarEditService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

    editCar(data: {name: string;
        city: string;
        gearbox: string;
        doors: string;
        fuel: string;
        people: string;
        condition: string;
        price: number;
        imageUrl: string;}, id: string){
        return this.http.patch(`${this.baseUrl}/car/update/${id}`, data);
    }
    getSelected(id:string):Observable<Car>{
        return this.http.get<Car>(`${this.baseUrl}/car/get/${id}`);
    }

}