import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from 'src/app/models/car';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cars: Car[]=[];
  selectedCarId!: string;
  isEdit = false;
  sendId:any;
  private readonly notifier: NotifierService;
  constructor(
    private carService: CarService,
    notifierService: NotifierService) {
      this.notifier = notifierService; }

  ngOnInit() {
    this.getCarList();
  }

  private getCarList() {
  this.carService.getAllCars().subscribe(
    (res)=>{
      this.cars=res;
    },
    async(err)=>{
      this.notifier.notify('error', 'Nie udalo sie pobrac listy samochodów');
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
    this.sendId=id;
  } 

}