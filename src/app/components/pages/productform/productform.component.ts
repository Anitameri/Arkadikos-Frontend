import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { Product } from 'app/interface/product';
import { ProductDto } from 'app/interface/ProductDto';
import { AuthorizationService } from 'app/services/authorization.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  products?:any;
  product?:Product;

    name?:String;
    description?:String;
    image?:String;
    price?:Number;
    category?:String;
    units?:Number;
    user_id?:Number;





  constructor(private productService: ProductService, private auth: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }
  onSaveProduct(form:NgForm)
  {
    if(this.auth.user_info.id)
    {
      let newProduct:ProductDto=new ProductDto(form.value.name, form.value.description, form.value.price, form.value.category, form.value.image, form.value.units, form.value.rating, this.auth.user_info.id);
      this.productService.createProduct(newProduct).subscribe((product)=> {this.products.push(product)}).add(()=>{this.router.navigate([''])});
    }
    else
      this.router.navigate(['login-register']);
  }
}