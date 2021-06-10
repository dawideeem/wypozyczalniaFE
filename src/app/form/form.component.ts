import { Component, OnInit } from '@angular/core';
import { MessangerService } from '../services/messanger.service';
import { CarEditService } from '../admin/edit/car-edit.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
id:any;
cars: any;

  constructor(private msg: MessangerService,private carEditService: CarEditService) { }

  ngOnInit(): void {
    this.id=this.msg.getId()
    this.carEditService.getSelected(this.id).subscribe(
      (res)=>{
        this.cars=res;
        console.log(this.cars.name)
      },
      async(err)=>{
        console.log('Nie udalo sie pobrac pizzy')
      }
    )
  }

}
