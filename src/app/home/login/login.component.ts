import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any;

  private readonly notifier: NotifierService;
  
  credentials= new FormGroup({
    username: new FormControl("",[Validators.required, Validators.minLength(6)]),
    password: new FormControl("",[Validators.required, Validators.minLength(6)]),
  })


  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router, notifierService: NotifierService) {
    this.notifier = notifierService; }

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
        this.notifier.notify('success', 'Logowanie udane.');
        setTimeout(() => {
          this.onActive()
        })
      },
      async () => {
        this.notifier.notify('error', 'Logowanie nieudane, sprawdź wprowadzone dane.');
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
