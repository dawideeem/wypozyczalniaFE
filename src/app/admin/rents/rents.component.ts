import { Component, OnInit } from '@angular/core';
import { RentsService } from './rents-service';
import { Rents } from 'src/app/models/rents'

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {

  constructor(private rentsService: RentsService) { }
  rents: Rents[]=[];
  Rent?: any;


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

   
    accept(id:any){
      
const data={
  rented: true,
}
      this.rentsService.updateRent(data, id).subscribe((res) => {

      }, (err) => {
  
      });  
      window.location.reload();
    }
    decline(id:any){
      const data={
        rented: false,
      }
            this.rentsService.updateRent(data, id).subscribe((res) => {
      
            }, (err) => {
        
            });  
          window.location.reload();
    }

    send(rent:Rents){
      this.Rent=rent;
    }
}
