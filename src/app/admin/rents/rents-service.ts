import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rents } from 'src/app/models/rents';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentsService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

  public getAllRents(): Observable<Rents[]> {
    return this.http.get<Rents[]>(`${this.baseUrl}/rent/get`);
  }

  public updateRent(data:{
      rented:boolean
  } ,id: string){
    return this.http.patch(`${this.baseUrl}/rent/update/${id}`, data);
}

public getRent(id:any): Observable<Rents[]> {
  return this.http.get<Rents[]>(`${this.baseUrl}/rent/get/${id}`);
}

public getOwnerRent(id:any): Observable<Rents[]> {
  return this.http.get<Rents[]>(`${this.baseUrl}/rent/getOwner/${id}`);
}

}