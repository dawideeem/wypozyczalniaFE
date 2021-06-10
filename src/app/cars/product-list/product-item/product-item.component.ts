import { Component, OnInit, Input } from '@angular/core';
import {Car} from 'src/app/models/car'
import {MessangerService} from 'src/app/services/messanger.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Car | undefined


  constructor(private msg: MessangerService,private router: Router) {

   }

  ngOnInit(): void {
  }
  handleAddToCart(id: any){
    this.router.navigate(['/form'])
    this.msg.sendId(id);
  }

}
