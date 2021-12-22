import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Msg } from 'src/app/models/msg';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })


export class KontaktService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

    NewMsg(msg:Msg):Observable<any> {
        return this.http.post(`${this.baseUrl}/msg/add`, msg);
      }

}