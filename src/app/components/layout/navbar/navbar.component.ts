import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items:number=0;

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.items = this.service.items;
  }

}
