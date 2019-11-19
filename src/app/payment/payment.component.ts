import { Component, OnInit } from '@angular/core';
import { AlertService, AuthenticationService, UserService } from '../_services/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public products;
  public qty = 1;
  constructor(private userService: UserService, private router: ActivatedRoute) { }

  ngOnInit() {
    let productId = this.router.snapshot.params['id'];
    this.userService.getSelectedProduct(productId).subscribe(data => {
      this.products = data[0];
    });
  }

}
