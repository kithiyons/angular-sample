import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  public products;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.userService.getProducts()
    .subscribe(products => this.products = products);
  }

}
