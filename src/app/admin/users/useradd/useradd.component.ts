import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {

  user: any;
  isRegistered = false;


  credentials = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    roles: ['admin']
  })

  roles = ['admin'];

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }

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
        this.router.navigate(['admin'])
        setTimeout(() => {
          this.onActive()
        })
      },
      async (res) => {
      }
    );


  }
  onActive() {
    window.scroll(0, 0)
  }

}
