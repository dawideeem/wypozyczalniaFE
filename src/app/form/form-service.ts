import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })

  export class RentAddService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

    addRent(data: {
        firstname: string;
        lastname: string;
        phone: string;
        city: string;
        street: string;
        build: string;
        birth: string;
        email: string;
        postal:string;
        startDate: Date;
        endDate: Date;
        price: string;
        cityRent: string;
        carRent: string;
        ownerID:string;
    }) {
        return this.http.post(`${this.baseUrl}/rent/add`, data);
      }

}