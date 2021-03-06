import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { filter } from 'rxjs/operators';
import { Msg } from 'src/app/models/msg';
import { MsgService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private readonly notifier: NotifierService;

  ownerId : any;
  UserMessage : any;
  AdminMessage : any;
  username:any;
  subject:any;
  email:any;
  id:any;
  msg: Msg[]=[];
  myCredentials = new FormGroup({
    adminMessage: new FormControl(null)
  })


  constructor(private msgService: MsgService,notifierService: NotifierService) {
    this.notifier = notifierService; }

  ngOnInit(): void {
  this.getMsgList();

  }

  getMsgList(){
    this.msgService.getAllMsg().subscribe(
      (res)=>{
        this.msg=res;
        this.filter();
      },
      (err)=>{
        this.notifier.notify('error', 'Nie udało się pobrać twoich wiadomości.');
      }
    )
    
  }

  delete(id: any){
    this.msgService.deleteMsg(id).subscribe(
      () => this.getMsgList(),
      () => this.getMsgList(),
      () => this.getMsgList()
    );
  }

  send(ms:any){
    this.UserMessage=ms.userMessage;
    this.AdminMessage=ms.adminMessage;
    this.ownerId=ms.ownerId;
    this.subject=ms.subject;
    this.email=ms.email;
    this.id=ms.id;
    this.username=ms.username;
  }

  onSubmit(){
    const msgData = {
      username: this.username,
      email: this.email,
      subject: this.subject,
      userMessage: [],
      adminMessage: [this.myCredentials.controls.adminMessage.value],
      ownerId: this.ownerId,
      option: true
    };
    this.msgService.updateMsg(msgData,this.id).subscribe((res)=>{
      this.getMsgList();
      this.notifier.notify('error', 'Wiadomość nie została wysłana, spróbuj ponownie.');

    },(err)=>{this.getMsgList();
      this.notifier.notify('success', 'Wiadomość została wysłana.');


    }
    );
  }
  filter(){
    this.msg.forEach((item)=>{
     
    }
    )
    
  }


}
