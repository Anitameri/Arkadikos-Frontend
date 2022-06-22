import { Component, OnInit } from '@angular/core';
import{ProductService} from '../../../services/product.service';
import { Product } from 'app/interface/product';
import { order } from 'app/interface/order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  products:Product[]=[];

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getProductsList().subscribe((products)=>(this.products=products));
    console.log(this.products);
  }

  addToCart(product:Product): void {
    if(product.id&&product.name&&product.price&&product.image&&product.units)
    this.productService.orders.push(new order(product.id, product.name, product.price, product.image, 1, product.units));
   
    (document.getElementById("product"+product.id?.toString()) as HTMLElement).style.backgroundColor="green";
  }
  showOneProduct(product:Product): void {
    this.productService.oneProduct=product;
    this.router.navigate(['oneproduct']);
  }
}
