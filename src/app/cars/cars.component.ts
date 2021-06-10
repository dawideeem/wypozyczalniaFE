import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
car=new Car("Audi","A3",2021);
}
class Car{
  constructor(public marka:string,public model: string, public rocznik: number){
  }
}