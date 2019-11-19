import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  public myCart;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.getCart();
  }
   getCart() {
    this.userService.getCart()
    .subscribe(myCart => this.myCart = myCart);
   }

   removeFromCart(item) {
    this.userService.delete(item.id)
        .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                // this.alertService.success('Registration successful', true);
                this.router.navigate(['/mycart']);
            },
            error => {
                //  this.alertService.error(error);
                //this.loading = false;
            });
  }

}
