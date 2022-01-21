import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CarEditService } from './car-edit.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() data: any;

  private readonly notifier: NotifierService;

  Cities=['Kraków','Warszawa','Poznań','Kielce','Wrocław','Łódź'];
 
  private id: string = '';
  cars: any;

  constructor(
    private carEditService: CarEditService,
    private router: Router,
    notifierService: NotifierService) {
      this.notifier = notifierService; }

  credentials = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    city: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    gearbox: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    doors: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    fuel: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    people: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    condition: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    price: new FormControl(null,[Validators.required, Validators.minLength(1)]),
    imageUrl: new FormControl(null,[Validators.required, Validators.minLength(5)])
  });
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.carEditService.getSelected(this.data).subscribe(
      (res)=>{
        this.cars=res;
        this.credentials.patchValue(this.cars);
      },
      async(err)=>{
      }
    ) 
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
      this.notifier.notify('success', 'Edycja przebiegła pomyślnie');
      
    }, async(err) => {
      this.notifier.notify('success', 'Edycja przebiegła pomyślnie');
    },
    ()=>{
      this.notifier.notify('success', 'Edycja przebiegła pomyślnie');
    });

  }

}
