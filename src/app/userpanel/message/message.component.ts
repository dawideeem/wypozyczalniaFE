import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/User/user.service';
import { MessageService } from './message.service';
import { Msg } from 'src/app/models/msg';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  username:any;
  userData:any;
  msgData: any;
  UserMessage : string[]=[];
  id:any;
  AdminMessage : any;
  msg:Msg[]=[];
  myCredentials= new FormGroup({
    userMessage:new FormControl(null)
  })

  constructor(private messageService:MessageService,private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userData=this.userService.getUserId();
    this.loadMessage();
  }

  send(ms: Msg){
    this.username=ms.username;
    this.UserMessage=ms.userMessage;
    this.AdminMessage=ms.adminMessage;
    this.id=ms.id;
    this.msgData=ms;
    console.log(this.msgData.userMessage)
  }

  loadMessage(){
    this.messageService.getOwnerMsg(this.userData).subscribe(
      (res)=>{
        this.msg=res;

      },
      (err)=>{
        console.log('Nie udalo sie pobrac twoich wiadomosci')
      }
    )
  }

  onSubmit(){
    const msgData={
      username: this.msgData.username,
      email: this.msgData.email,
      subject: this.msgData.subject,
      userMessage: [this.myCredentials.controls.userMessage.value],
      adminMessage: [],
      ownerId: this.msgData.ownerId,
      option: false
    };
    this.messageService.updateMsg(msgData,this.id).subscribe((res)=>{
      this.loadMessage();
    },(err)=>{this.loadMessage();

    },
    
    );
    window.location.reload();
  }
}
