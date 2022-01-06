import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import {UserpanelComponent} from './userpanel/userpanel.component';

const routes: Routes = [{path: 'home', component: HomeComponent},
                        {path: 'cars', component: CarsComponent},
                        {path: 'kontakt', component: KontaktComponent},
                        {path: 'form/:id', component: FormComponent, canActivate: [AuthGuard]},
                        {path: '', component: HomeComponent},
                        {path: 'register', component: RegisterComponent},
                        {path: 'login', component: LoginComponent},
                        {
                          path: 'admin', loadChildren: () =>
                            import('./admin/admin.module').then((m) => m.AdminModule), canActivate: [AuthGuard, AuthAdminGuard]
                        },
                        {
                          path: 'userpanel', loadChildren: () =>
                        import('./userpanel/userpanel.module').then((m) => m.UserpanelModule), canActivate: [AuthGuard]
                      },
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
