import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';
import {Car} from 'src/app/models/car';
import { CarService } from 'src/app/admin/list/car.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchTerm!: any;
  searchCity!: any;
  searchPrice!: any;
  searchPeople: any;
  searchFuel: any;
  searchKlima: any;

  cars: Car[]=[];

  constructor(private messangerService: MessangerService,private carService: CarService) { 
 
  }

  ngOnInit(): void {
    this.getCarList()
    this.searchCity=this.messangerService.getFilter();
  }
  private async getCarList() {
    this.carService.getAllCars().subscribe(
      async (res) => {
        this.cars = res;
      },
      async (err) => {
        console.log('Nie udalo sie pobrac listy samochodow')
      }
    )
  };
}


