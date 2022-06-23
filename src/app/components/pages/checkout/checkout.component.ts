import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from 'app/interface/order';
import { AuthorizationService } from 'app/services/authorization.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orders:order[]=[];
  totalPrice:number=0;
  items:number=0;

  constructor(private service:ProductService, private auth:AuthorizationService, private router:Router) { }

  ngOnInit(): void {
    this.service.updateItem();
    this.orders = this.service.orders;
    this.items = this.orders.length;
    for(let o of this.orders)
      if(o.totalPrice)
        this.totalPrice += o.totalPrice;
  }

  deleteOrder(id:number):void
  {
    this.orders.splice(id, 1);
    this.service.updateItem();
    this.items = this.orders.length;
    this.totalPrice = 0;
    for(let o of this.orders)
      if(o.totalPrice)
        this.totalPrice += o.totalPrice;
  }

  changeUnits(id:number):void
  {
    let val = Number.parseInt((document.getElementById("units" + id.toString()) as HTMLInputElement).value);
    console.log(val);
    this.totalPrice = 0;
    this.orders[id].units = val;
    let p = this.orders[id].price;
    if(p)
      this.orders[id].totalPrice = val * p;
    for(let o of this.orders)
      if(o.totalPrice)
        this.totalPrice += o.totalPrice;
  }

  payOrders():void
  {
    if(!this.items)
      console.log("el carrito esta vacio!");
    else if(this.auth.isLogged())
      this.service.payOrder().subscribe((value) => console.log(value ? this.completedPayment() : "pago cancelado"));
    else
      this.router.navigate(['login-register']);
  }

  completedPayment():String
  {
    this.items = 0;
    this.totalPrice = 0;
    this.orders.splice(0);
    this.service.updateItem();
    return "pago completado";
  }
}