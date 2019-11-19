import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  public cakes;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getCakes();
  }

  getCakes() {
    this.userService.getCakes()
    .subscribe(cakes => this.cakes = cakes);
  }

}
