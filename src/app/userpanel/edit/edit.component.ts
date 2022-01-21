import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserEditService } from './user-edit.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User/user.service';
import { User } from 'src/app/models/user';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  users: any;
  success!: boolean;
  private readonly notifier: NotifierService;

  constructor(private formBuilder: FormBuilder,
    private userEditService: UserEditService,
    private router: Router,
    private userService: UserService,
    notifierService: NotifierService) {
      this.notifier = notifierService;
     }
    userId:any;

    myCredentials = new FormGroup({
      firstname: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      phone: new FormControl(null,[Validators.required, Validators.minLength(9)]),
      city: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      street: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      build: new FormControl(null,[Validators.required, Validators.minLength(1)]),
      birth: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      postal: new FormControl(null,[Validators.required, Validators.minLength(5)]),
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
        this.notifier.notify('error', 'Nie udalo sie pobrac danych uzytkownika');
      }
    );
  }

 


onSubmit() {
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
    this.notifier.notify('error', 'Przepraszamy, spróbuj ponownie za chwile.');
  }, (err) => {
    
    this.notifier.notify('success', 'Twoje dane zostały zmodyfikowane.');
  });

}
get validator(){
  return this.myCredentials.controls;
};
}
