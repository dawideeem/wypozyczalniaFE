import { Component, OnInit } from '@angular/core';
import { RentsService } from '../rents/rents-service';
import { Rents } from 'src/app/models/rents';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private rentsService: RentsService) { }
  rents: Rents[]=[];
  Rent?: any;
  days: any;

  ngOnInit(): void {
    this.getRents();
    this.Rent=this.rents
  }

  getRents(){
    this.rentsService.getAllRents().subscribe(
      (res)=>{
        this.rents=res;

      },
      async(err)=>{
        console.log('Nie udalo sie pobrac listy wypozyczen')
      }
    )
  }

 calculateDiff(data1:any, data2:any){
    data1=new Date(data1);
    data2=new Date(data2);
    
    this.days= Math.floor((Date.UTC(data2.getFullYear(), data2.getMonth(), data2.getDate()) - Date.UTC(data1.getFullYear(), data1.getMonth(), data1.getDate()) ) /(1000 * 60 * 60 * 24));
    return this.days;
  }

}
