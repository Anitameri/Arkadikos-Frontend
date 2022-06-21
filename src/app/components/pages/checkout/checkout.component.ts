import { Component, OnInit } from '@angular/core';
import { order } from 'app/interface/order';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orders:order[]=[];
  items:number=0;
  totalPrice:number=0;

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.orders = this.service.orders;
    this.items = this.orders.length;
    for(let o of this.orders)
      if(o.totalPrice)
        this.totalPrice += o.totalPrice;
  }

}
