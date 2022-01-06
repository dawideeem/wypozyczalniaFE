import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any;

  credentials= new FormGroup({
    username: new FormControl("",[Validators.required, Validators.minLength(6)]),
    password: new FormControl("",[Validators.required, Validators.minLength(6)]),
  })


  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }

  async logIn() {
    const loginData = {
      username: this.credentials.controls.username.value,
      password: this.credentials.controls.password.value,
    };
    this.authService.login(loginData).subscribe(
      async () => {
        this.router.navigate(['home']);
        setTimeout(() => {
          this.onActive()
        })
      },
      async () => {
      },
    );
  }

  onActive() {
    window.scroll(0, 0)
  }

  get validator(){
    return this.credentials.controls;
  };
}
