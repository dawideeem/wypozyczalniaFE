import { Component, OnInit } from '@angular/core';
import { CarEditService } from '../admin/cars/edit/car-edit.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/User/user.service';
import { UserEditService } from '../userpanel/edit/user-edit.service';
import { ActivatedRoute } from '@angular/router';
import  {RentAddService } from './form-service'
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private readonly notifier: NotifierService;

id:any;
cars: any;
userId:any;
users:any;
price: any;
days:any;
rentPrice:any;


  constructor(private rentAddService:RentAddService,private route: ActivatedRoute,private userEditService: UserEditService,private userService: UserService,private carEditService: CarEditService, notifierService: NotifierService) {
    this.notifier = notifierService; }

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
    date1: new FormControl('2022-02-01'),
    date2: new FormControl('2022-02-03')
  });

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.userId=this.userService.getUserId();
    this.getCarData();
    this.getUserData();
  }

  getCarData(){
    this.carEditService.getSelected(this.id).subscribe(
      (res)=>{
        this.cars=res;
        console.log(this.cars.name)
      },
      async(err)=>{
        this.notifier.notify('error', 'Nie udało się pobrać danych samochodu');
      }
    )
  }

  private getUserData(){
    this.userEditService.getSelected(this.userId).subscribe(
      (res)=>{
        this.users=res;
        this.myCredentials.patchValue(this.users);
      },
      (err)=>{
        this.notifier.notify('error', 'Nie udało się pobrać danych użytkownika');
      }
    );
  }

  calculateDiff(data1:any, data2:any, price:any){
    data1=new Date(data1);
    data2=new Date(data2);
    
    this.days= Math.floor((Date.UTC(data2.getFullYear(), data2.getMonth(), data2.getDate()) - Date.UTC(data1.getFullYear(), data1.getMonth(), data1.getDate()) ) /(1000 * 60 * 60 * 24));
    this.rentPrice=this.days*price;
    return this.rentPrice;
  }

  submit(){
    const rentData={
      firstname: this.myCredentials.controls.firstname.value,
      lastname: this.myCredentials.controls.lastname.value,
      phone: this.myCredentials.controls.phone.value,
      city: this.myCredentials.controls.city.value,
      street: this.myCredentials.controls.street.value,
      build: this.myCredentials.controls.build.value,
      birth: this.myCredentials.controls.birth.value,
      email: this.myCredentials.controls.email.value,
      postal: this.myCredentials.controls.postal.value,
      startDate: this.myCredentials.controls.date1.value,
      endDate: this.myCredentials.controls.date2.value,
      price: this.rentPrice,
      cityRent: this.cars.city,
      carRent: this.cars.name,
      ownerID: this.userId
    }
    this.rentAddService.addRent(rentData).subscribe((res) => {
      this.notifier.notify('error', 'Coś poszło nie tak, spróbuj ponownie');
    }, (err) => {
     
      this.notifier.notify('success', 'Wynajmowanie samochodu zakończone sukcesem.');
    });

  }

}
