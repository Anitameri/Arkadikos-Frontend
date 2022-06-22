import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Product } from 'app/interface/product';
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





  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  onSaveProduct(form:NgForm){

    const newProduct={
     name:form.value.name,
      description:form.value.description,
     image:form.value.image,
     price:form.value.price,
     category:form.value.category,
     units:form.value.units,
     user_id:form.value.user_id,
     rating:form.value.rating



    }
    this.productService.createProduct(newProduct).subscribe((product)=>(this.products.push(product)));


  }



  }


