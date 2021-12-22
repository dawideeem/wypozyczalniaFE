import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserEditService } from './user-edit.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  users: any;

  constructor(private formBuilder: FormBuilder,
    private userEditService: UserEditService,
    private router: Router,
    private userService: UserService) { }
    userId:any;

    myCredentials = new FormGroup({
      firstname: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      phone: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      city: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      street: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      build: new FormControl(null,[Validators.required, Validators.minLength(1)]),
      birth: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      postal: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    });

  ngOnInit(): void {
    this.userId=this.userService.getUserId();
    this.getUserData();
  }

  private getUserData(){
    this.userEditService.getSelected(this.userId).subscribe(
      (res)=>{
        this.users=res;
        this.myCredentials.patchValue(this.users);
      },
      (err)=>{
        console.log('Nie udalo sie pobrac danych uzytkownika')
      }
    );
  }

 


onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.myCredentials.value);

  const userData = {
    firstname: this.myCredentials.controls.firstname.value,
    lastname: this.myCredentials.controls.lastname.value,
    phone: this.myCredentials.controls.phone.value,
    city: this.myCredentials.controls.city.value,
    street: this.myCredentials.controls.street.value,
    build: this.myCredentials.controls.build.value,
    birth: this.myCredentials.controls.birth.value,
    email: this.myCredentials.controls.email.value,
    postal: this.myCredentials.controls.postal.value,
  };
  this.userEditService.editUser(userData, this.userId).subscribe((res) => {

  }, (err) => {

  });
  this.router.navigate(['userpanel'])
}
}
