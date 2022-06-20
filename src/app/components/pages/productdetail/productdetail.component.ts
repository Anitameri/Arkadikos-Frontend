import { Component, OnInit } from '@angular/core';
import{ProductService} from '../../../services/product.service';
import { Product } from 'app/interface/product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  products:Product[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsList().subscribe((products)=>(this.products=products));
    console.log(this.products);
  }

  addToCart(product:Product): void {
    this.productService.products.push(product);
    (document.getElementById("product"+product.id?.toString()) as HTMLElement).style.backgroundColor="green";
  }
}
