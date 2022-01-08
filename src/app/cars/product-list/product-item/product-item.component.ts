import { Component, OnInit, Input } from '@angular/core';
import {Car} from 'src/app/models/car'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Car;


  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }
  handleAddToCart(id: any){
    this.router.navigate(['/form', id])
  }

}
