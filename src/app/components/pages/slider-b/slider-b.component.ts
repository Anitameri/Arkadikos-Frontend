import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'app/interface/product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-slider-b',
  templateUrl: './slider-b.component.html',
  styleUrls: ['./slider-b.component.css']
})
export class SliderBComponent implements OnInit {

  products:Product[]=[
    {name: "Camiseta Arkadikos",
    id: 1,
    image:"assets/images/slider/camisetaslider.png",
    description: "Camiseta Unisex para lucir tu moda retro de nuestra Comunidad",
    price: 100,
    category: "merchan",
    units: 1,
    rating: 4,
    user_id: 1},

    {name: "Sudadera Arkadikos",
    id:2,
    image:"assets/images/slider/sudadera merchandising slider.png",
    price: 100,
    category: "merchan",
    description: "Abrigate del frío y luce el logo de tu Comunidad",
    units: 1,
    rating: 4,
    user_id: 1},

    {name: "Taza Cafe Arkadikos",
    id:3,
    image:"assets/images/slider/tazas para slider.png",
    price: 100,
    category: "merchan",
    description: "¿Piensas Retro desde el desayuno? Esta es tu taza!",
    units: 1,
    rating: 4,
    user_id: 1}




  ];
 dataEvent: string | undefined;
 
  
  constructor(private config:NgbCarouselConfig) {
  
    config.pauseOnHover=false;
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
   }
   ngOnInit(){

  
  }
   onSlide(event:any) {
    this.dataEvent = JSON.stringify(event);
    console.log(event);
    const imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
    console.log("image index", imageIndex);
  }
  /* dataEvent: string;

  onSlide(event) {
    this.dataEvent = JSON.stringify(event);
    console.log(event);
    const imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
    console.log("image index", imageIndex);
  } */

}
