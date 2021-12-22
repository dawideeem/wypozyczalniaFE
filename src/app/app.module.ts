import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { ProductListComponent } from './cars/product-list/product-list.component';
import { ProductItemComponent } from './cars/product-list/product-item/product-item.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ProductFilterPipe } from './cars/product-list/product-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityFilterPipe } from './cars/product-list/city-filter.pipe';
import { PriceFilterPipe } from './cars/product-list/price-filter.pipe';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PeopleFilterPipe } from './cars/product-list/people-filter.pipe';
import { FuelFilterPipe } from './cars/product-list/fuel-filter.pipe';
import { KlimaFilterPipe } from './cars/product-list/klima-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    ProductListComponent,
    ProductItemComponent,
    KontaktComponent,
    ProductFilterPipe,
    CityFilterPipe,
    PriceFilterPipe,
    FormComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    PeopleFilterPipe,
    FuelFilterPipe,
    KlimaFilterPipe,
    UserpanelComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
