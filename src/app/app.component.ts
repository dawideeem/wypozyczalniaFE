import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { IUser } from './User/I-user';
import { UserService } from './User/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    
  }
  title = 'wypozyczalnia';

  constructor(
    
  ){}

  
}
