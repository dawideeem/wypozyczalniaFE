import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifierModule } from 'angular-notifier';
import { UserpanelRoutingModule } from './userpanel-routing.module';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { UserrentComponent } from './userrent/userrent.component';


@NgModule({
  declarations: [EditComponent, MessageComponent, UserrentComponent],
  imports: [
    CommonModule,
    UserpanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule
  ]
})
export class UserpanelModule { }
