import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Msg } from 'src/app/models/msg';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

  public getOwnerMsg(id:string): Observable<Msg[]> {
    return this.http.get<Msg[]>(`${this.baseUrl}/msg/get-owned/${id}`);
  }
  public updateMsg(msg:Msg,id:any):Observable<any>{
    return this.http.patch(`${this.baseUrl}/msg/update/${id}`, msg);
  }
 
}