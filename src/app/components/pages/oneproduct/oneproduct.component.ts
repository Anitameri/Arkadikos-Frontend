import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from 'app/interface/order';
import { Product } from 'app/interface/product';
import { AuthorizationService } from 'app/services/authorization.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-oneproduct',
  templateUrl: './oneproduct.component.html',
  styleUrls: ['./oneproduct.component.css']
})
export class OneproductComponent implements OnInit {

  product:Product=new Product();

  products:Product[]=[
    {name: "Camiseta Arkadikos",
    id: 1,
    image:"assets/images/Group 1.png",
    description: "Camiseta Unisex para lucir tu moda retro de nuestra Comunidad",
    price: 100,
    category: "merchan",
    units: 1,
    rating: 4,
    user_id: 1},

    {name: "Sudadera Hombre Arkadikos",
    id:2,
    image:"assets/images/Group 2.png",
    price: 100,
    category: "merchan",
    description: "Abrigate del frío y luce el logo de tu Comunidad",
    units: 1,
    rating: 4,
    user_id: 1},

    {name: "Taza Cafe Arkadikos",
    id:3,
    image:"assets/images/Group 3.png",
    price: 100,
    category: "merchan",
    description: "¿Piensas Retro desde el desayuno? Esta es tu taza!",
    units: 1,
    rating: 4,
    user_id: 1},

    {name: "Sudadera Mujer Arkadikos",
    id:3,
    image:"assets/images/Group 4.png",
    price: 100,
    category: "merchan",
    description: "Abrigate del frío y luce el logo de tu Comunidad",
    units: 1,
    rating: 4,
    user_id: 1}

  ];

  constructor(private productservice:ProductService, private router:Router, private auth:AuthorizationService) { }

  ngOnInit(): void {
    this.product=this.productservice.oneProduct;

  }
  addToCart(product:Product): void {
    if(product.id&&product.name&&product.price&&product.image&&product.units)
      this.productservice.orders.push(new order(product.id, product.name, product.price, product.image, 1, product.units));
    (document.getElementById("product"+product.id?.toString()) as HTMLElement).style.backgroundColor="green";
    this.productservice.updateItem();
  }
  payOrders():void
  {

    if(this.auth.isLogged())
      this.productservice.payOneProduct().subscribe((value) => console.log(value ?  "pago completado" : "pago cancelado"));
    else
      this.router.navigate(['login-register']);
  }

  delete(){
    if(this.productservice.oneProduct.id)
    this.productservice.deleteProduct(this.productservice.oneProduct.id).subscribe().add(()=>{this.router.navigate([''])});

  }






}
