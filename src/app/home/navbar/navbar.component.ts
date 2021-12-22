import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IUser } from 'src/app/User/I-user';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isEnable: boolean = false;
  isLoggedUser: any;
  userData!: IUser;

  constructor( private authService: AuthenticationService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((res) => {
      this.isLoggedUser = res;
      this.userData=this.userService.getUserName();
    })
    this.authService.isAdmin.subscribe((res) => {
      this.isEnable = res;
    })
  }

  toLogin() {
    setTimeout(() => {
      document.getElementById("login")?.scrollIntoView();
    })
  }



  logOut() {
    this.authService.logout();
    this.authService.isAdmin.next(false)
  }
}
