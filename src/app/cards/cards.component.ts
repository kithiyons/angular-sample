import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public cards;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.userService.getCards()
    .subscribe(cards => this.cards = cards);
  }

}
