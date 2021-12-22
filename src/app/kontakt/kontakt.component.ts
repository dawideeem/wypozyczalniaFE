import { Component, createPlatform, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/User/user.service';
import { KontaktService } from './kontakt.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor(private userService: UserService, private kontaktService: KontaktService) { }
  userDetails:any;
  myCredentials = new FormGroup({
    username: new FormControl (null,[Validators.required, Validators.minLength(3)]),
    email: new FormControl (null,[Validators.required, Validators.email]),
    subject: new FormControl (null,[Validators.required]),
    message: new FormControl (null,[Validators.required, Validators.minLength(20)])
  })
  ngOnInit(): void {
    this.userDetails=this.userService.getUserDetails();
    this.createForm();
  }

createForm(){
this.myCredentials = new FormGroup({
  username: new FormControl (this.userDetails.username,[Validators.required, Validators.minLength(3)]),
  email: new FormControl (this.userDetails.email,[Validators.required, Validators.email]),
  subject: new FormControl (null,[Validators.required]),
  message: new FormControl (null,[Validators.required, Validators.minLength(20)])
})
}

  onSubmit(){

    const msgData = {
      username: this.myCredentials.controls.username.value,
      email: this.myCredentials.controls.email.value,
      subject: this.myCredentials.controls.subject.value,
      userMessage: [this.myCredentials.controls.message.value],
      ownerId: this.userDetails.id,
      adminMessage: [],
      option: false
    };
    this.kontaktService.NewMsg(msgData).subscribe((res)=>{

    },(err)=>{

    }
    );

    console.warn(this.myCredentials.value);
  }
}
