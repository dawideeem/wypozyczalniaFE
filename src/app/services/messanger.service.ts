import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  idsend: any;
  filterData: any;
  subject = new Subject()

  constructor() { }

  sendMsg(product: any){
  this.subject.next(product)
  }

  getMsg(){
    return this.subject.asObservable()
  }

  getFilter(){
    return this.filterData;
  }
  setFilter(value: any){
    this.filterData=value;
  }
  sendId(id:any){
    this.idsend=id;
  }
  getId(){
    return this.idsend;
  }
}
