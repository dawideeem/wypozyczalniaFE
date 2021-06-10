import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessangerService } from 'src/app/services/messanger.service';
import { CarEditService } from './car-edit.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Cities=['Kraków','Warszawa','Poznań','Kielce','Wrocław','Łódź'];
 
  private id: string = '';
  cars: any;
  credentials: any;
  constructor(
    private formBuilder: FormBuilder,
    private carEditService: CarEditService,
    private router: Router,
    private messangerService: MessangerService,
  ) { }

  ngOnInit(): void {
    this.id=this.messangerService.getId();
    this.carEditService.getSelected(this.id).subscribe(
      (res)=>{
        this.cars=res;
        this.createForm();
      },
      async(err)=>{
        console.log('Nie udalo sie pobrac samochodu')
      }
    ) 
  }





 private createForm(){
  this.credentials = this.formBuilder.group({
    name: [this.cars.name, [Validators.required, Validators.minLength(3)]],
    city: [this.cars.city, [Validators.required, Validators.minLength(3)]],
    gearbox: [this.cars.gearbox, [Validators.required, Validators.minLength(5)]],
    doors: [this.cars.doors, [Validators.required, Validators.minLength(1)]],
    fuel: [this.cars.fuel, [Validators.required, Validators.minLength(1)]],
    people: [this.cars.people, [Validators.required, Validators.minLength(1)]],
    condition: [this.cars.condition, [Validators.required, Validators.minLength(2)]],
    price: [this.cars.price, [Validators.required, Validators.minLength(1)]],
    imageUrl: [this.cars.imageUrl, [Validators.required, Validators.minLength(5)]],
  })
 }



  submit(){
    const carData = {
      name: this.credentials.controls.name.value,
      city: this.credentials.controls.city.value,
      gearbox: this.credentials.controls.gearbox.value,
      doors: this.credentials.controls.doors.value,
      fuel: this.credentials.controls.fuel.value,
      people: this.credentials.controls.people.value,
      condition: this.credentials.controls.condition.value,
      price: this.credentials.controls.price.value,
      imageUrl: this.credentials.controls.imageUrl.value
    };
    this.carEditService.editCar(carData, this.id).subscribe((res) => {

    }, (err) => {

    });
    this.router.navigate(['admin/list'])

  }

}
