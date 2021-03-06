import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { iif, Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private readonly notifier: NotifierService;

  user: any;
  isRegistered = false;

  credentials = new FormGroup({
    username: new FormControl("",[Validators.required, Validators.minLength(6)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required, Validators.minLength(6)]),
    roles: new FormControl('ROLE_USER')
  })

  roles = ['user'];

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, notifierService: NotifierService) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {

  }

  async createNewUser() {
    const registerData = {
      username: this.credentials.controls.username.value,
      password: this.credentials.controls.password.value,
      email: this.credentials.controls.email.value,
      roles: [this.credentials.controls.roles.value]
    };
    this.authService.register(registerData).subscribe(
      async () => {
        this.notifier.notify('success', 'Rejestracja przebiegła pomyślnie, możesz się zalogować.');
        this.router.navigate(['login']);
        setTimeout(() => {
          this.onActive()
        })
      },
      async (res) => {
        this.notifier.notify('error', 'Rejestracja niepowiodła się, spróbuj ponownie później.');
      }
    );


  }

  get validator(){
    return this.credentials.controls;
  };

  onActive() {
    window.scroll(0, 0)
  }


}
