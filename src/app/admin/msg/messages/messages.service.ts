import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Msg } from 'src/app/models/msg';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MsgService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

  public getAllMsg(): Observable<Msg[]> {
    return this.http.get<Msg[]>(`${this.baseUrl}/msg/get`);
  }

  public deleteMsg(id: string) {
    return this.http.delete(`${this.baseUrl}/msg/delete/${id}`);
  }

  public NewMsg(msg:Msg):Observable<any> {
    return this.http.post(`${this.baseUrl}/msg/add`, msg);
  }

  public updateMsg(msg:Msg,id:any):Observable<any>{
    return this.http.patch(`${this.baseUrl}/msg/update/${id}`, msg);
  }
}