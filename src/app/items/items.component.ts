import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../_services/index';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any = {};
  public lists;
  constructor(private userService:UserService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getById(this.route.snapshot.params["id"]);
    // this.item.parentId = this.route.snapshot.params["id"];
  }

  getById(id) {
    this.userService.getById(id)
    .subscribe(lists => this.lists = lists);
  }

  addToCart(item) {
    this.items.parentId = this.route.snapshot.params["id"];
    this.items.itemName = item.cake;
    this.items.itemId = item.id;
    this.userService.addToCart(this.items)
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
