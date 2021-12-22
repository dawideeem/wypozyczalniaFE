import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

  

export class UserEditService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

    editUser(data: {username: string;
        password: string;
        email: string;
        }, id: string){
        return this.http.patch(`${this.baseUrl}/users/update/${id}`, data);
    }
    getSelected(id:string):Observable<User>{
        return this.http.get<User>(`${this.baseUrl}/users/get/${id}`);
    }

}