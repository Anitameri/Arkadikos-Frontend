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

  products:Product[]=[];
 dataEvent: string | undefined;
 
  
  constructor(private config:NgbCarouselConfig, private productService: ProductService ) {
  
    config.pauseOnHover=true;
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
   
   }
   ngOnInit(){
    this.productService.getProductsList().subscribe((products)=>(this.products=products));
  
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
