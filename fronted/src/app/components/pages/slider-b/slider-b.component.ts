import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import{ProductService} from '../../../services/product.service';
import { Product } from '../../../interface/product';

@Component({
  selector: 'app-slider-b',
  templateUrl: './slider-b.component.html',
  styleUrls: ['./slider-b.component.css']
})
export class SliderBComponent implements OnInit {

  products?:Product[]=[]; 
  
  constructor(private config:NgbCarouselConfig, private productService: ProductService ) {
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
   }
   ngOnInit(){
    this.productService.getProductsList().subscribe((products)=>(this.products=products));
    console.log(this.products);
  }
}
