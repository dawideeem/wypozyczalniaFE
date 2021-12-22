import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/User/user.service';
import {RentsService} from 'src/app/admin/rents/rents-service'
import { Rents } from 'src/app/models/rents';

@Component({
  selector: 'app-userrent',
  templateUrl: './userrent.component.html',
  styleUrls: ['./userrent.component.css']
})
export class UserrentComponent implements OnInit {

  userId:any;
  rents:Rents[]=[];

  constructor(
    private userService: UserService,
    private rentsService: RentsService
  ) { }

  ngOnInit(): void {
    this.userId=this.userService.getUserId();
    this.getRented();

  }

  getRented(){
    this.rentsService.getOwnerRent(this.userId).subscribe(
      (res)=>{
        this.rents=res;
      },
      async(err)=>{
        console.log('Nie udalo sie pobrac listy wypozyczen')
      }
    )
  }

}
