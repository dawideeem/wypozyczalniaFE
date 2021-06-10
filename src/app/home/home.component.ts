import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessangerService } from '../services/messanger.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
Cities=['Kraków','Warszawa','Poznań','Kielce','Wrocław','Łódź'];
  dane=this.formBulider.group({
    city:['']
  })
  constructor(private router: Router,private formBulider: FormBuilder, private messangerService: MessangerService) { }

  ngOnInit(): void {
  }

  searchbyfilter(){
    this.router.navigate(['/cars'])
    this.messangerService.setFilter(this.dane.value);
  }
}

