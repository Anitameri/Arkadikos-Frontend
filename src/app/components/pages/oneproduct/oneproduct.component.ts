import { Component, OnInit } from '@angular/core';
import { Product } from 'app/interface/product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-oneproduct',
  templateUrl: './oneproduct.component.html',
  styleUrls: ['./oneproduct.component.css']
})
export class OneproductComponent implements OnInit {

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

    {name: "Sudadera Arkadikos",
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

    {name: "Taza Cafe Arkadikos",
    id:3,
    image:"assets/images/Group 4.png",
    price: 100,
    category: "merchan",
    description: "¿Piensas Retro desde el desayuno? Esta es tu taza!",
    units: 1,
    rating: 4,
    user_id: 1}




  ];

  

  constructor() { }

  ngOnInit(): void {
   
  }

}
