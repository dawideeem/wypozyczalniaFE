import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from 'src/app/models/car';
import {MessangerService } from 'src/app/services/messanger.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cars: Car[]=[];
  selectedCarId!: string;
  isEdit = false;

  constructor(
    private carService: CarService,
    private messangerService: MessangerService
  ) { }

  ngOnInit() {
    this.getCarList();
  }

  private getCarList() {
  this.carService.getAllCars().subscribe(
    (res)=>{
      this.cars=res;
    },
    async(err)=>{
      console.log('Nie udalo sie pobrac listy samochodow')
    }
  )
  };

  delete(id: any){
    this.carService.deleteCar(id).subscribe(
      () => this.getCarList(),
      () => this.getCarList(),
      () => this.getCarList()
    );
  }

  getCarId(id:any){
    this.messangerService.sendId(id)
  } 

}