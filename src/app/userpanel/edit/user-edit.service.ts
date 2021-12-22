import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class UserEditService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

    editUser(data: {
        firstname: string;
        lastname: string;
        phone: string;
        city: string;
        street: string;
        build: string;
        birth: string;
        email: string;
        postal:string;}, id: string){
        return this.http.patch(`${this.baseUrl}/users/update2/${id}`, data);
    }
    public getSelected(id:string):Observable<User>{
      return this.http.get<User>(`${this.baseUrl}/users/get/${id}`);
  }


}