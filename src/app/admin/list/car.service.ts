import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

  public getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/car/get`);
  }

  public deleteCar(id: string) {
    return this.http.delete(`${this.baseUrl}/car/delete/${id}`);
  }
}