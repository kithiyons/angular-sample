import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
}
