import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateComponent } from './cars/create/create.component';
import { ListComponent } from './cars/list/list.component';
import { EditComponent } from './cars/edit/edit.component';
import { UseraddComponent } from './users/useradd/useradd.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UsereditComponent } from './users/useredit/useredit.component';
import { MessagesComponent } from './msg/messages/messages.component';
import { RentsComponent } from './rents/rents.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'list', component: ListComponent},
      { path: 'create', component: CreateComponent },
      { path: 'edit', component: EditComponent },
      { path: 'useradd', component: UseraddComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'useredit', component: UsereditComponent },
      { path: 'msg', component: MessagesComponent },
      { path: 'rents', component: RentsComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
