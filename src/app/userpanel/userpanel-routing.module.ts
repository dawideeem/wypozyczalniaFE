import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpanelComponent } from './userpanel.component';
import { EditComponent } from './edit/edit.component';
import { MessageComponent } from './message/message.component';
import { UserrentComponent } from './userrent/userrent.component'

const routes: Routes = [
  {
    path: '', component: UserpanelComponent, children:[
      {path: 'edituser',component: EditComponent},
      {path: 'message',component: MessageComponent},
      {path: 'userrent',component: UserrentComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpanelRoutingModule { }
