import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessangerService } from 'src/app/services/messanger.service';
import { CarAddService } from './car-add.service';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private readonly notifier: NotifierService;

  Cities=['Kraków','Warszawa','Poznań','Kielce','Wrocław','Łódź'];
  fileName!: string;

  credentials = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
    gearbox: ['', [Validators.required, Validators.minLength(5)]],
    doors: ['', [Validators.required, Validators.minLength(1)]],
    fuel: ['', [Validators.required, Validators.minLength(1)]],
    people: ['', [Validators.required, Validators.minLength(1)]],
    condition: ['', [Validators.required, Validators.minLength(2)]],
    price: ['', [Validators.required, Validators.minLength(1)]],
    imageUrl: ['', [Validators.required, Validators.minLength(5)]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private carAddService: CarAddService, 
    private router: Router,
    private messangerService: MessangerService,
    notifierService: NotifierService) {
      this.notifier = notifierService; }

  ngOnInit(): void {

  }
  createCar() {
    this.fileName=this.messangerService.sendFile();
    const carData = {
      name: this.credentials.controls.name.value,
      city: this.credentials.controls.city.value,
      gearbox: this.credentials.controls.gearbox.value,
      doors: this.credentials.controls.doors.value,
      fuel: this.credentials.controls.fuel.value,
      people: this.credentials.controls.people.value,
      condition: this.credentials.controls.condition.value,
      price: this.credentials.controls.price.value,
      imageUrl: "http://localhost:8080/api/file/files/"+this.fileName,
    };
    this.carAddService.addCar(carData).subscribe((res) => {
      this.notifier.notify('error', 'Nie udalo się dodać samochodów');
    }, (err) => {
      this.notifier.notify('success', 'Samochód został dodany');
    });



  }
}
