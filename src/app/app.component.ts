import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isEnable: boolean = false;
  isLoggedUser: any;
  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((res) => {
      this.isLoggedUser = res;
    })
    this.authService.isAdmin.subscribe((res) => {
      this.isEnable = res;
      console.log(res)
    })
  }
  title = 'wypozyczalnia';

  constructor(
    private authService: AuthenticationService
  ){}

  toRegister() {
    setTimeout(() => {
      document.getElementById("register")?.scrollIntoView();
    })
  }

  logOut() {
    this.authService.logout();
    this.authService.isAdmin.next(false)
  }
}
