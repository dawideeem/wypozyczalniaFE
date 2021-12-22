import { Component, OnInit } from '@angular/core';
import { UserService } from '../User/user.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

userData: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userData=this.userService.getUserName();
  }

}
