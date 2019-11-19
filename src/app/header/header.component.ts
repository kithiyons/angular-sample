import { Component, OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck {
  public username:string = 'test';
  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('userInfo');
  }
  ngDoCheck() {
    this.username = sessionStorage.getItem('userInfo');
  }
  logout () {
    sessionStorage.setItem('userInfo', '');
  }

}
