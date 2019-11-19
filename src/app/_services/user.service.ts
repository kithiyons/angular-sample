import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from '../_models/index';
import { Item } from '../_models/index';
@Injectable()
export class UserService {
    
    public loginApi = "http://localhost:3000/users";
    public cakesApi = 'http://localhost:3003/products';
    public cartApi = 'http://localhost:3001/cart';
    public userName = new BehaviorSubject('');
    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<User[]>('http://localhost:3004/employees');
    }

    getProducts() {
        return this.http.get('http://localhost:3003/products');
    }

    getCakes() {
        return this.http.get('http://localhost:3000/Cakes');
    }

    getCards() {
        return this.http.get('http://localhost:3001/Cards');
    }

    getCart() {
        return this.http.get('http://localhost:3002/MyCart');
    }

    getById(id: number) {
        return this.http.get('http://localhost:3000/Cakes/' + id);
    }

    create(user: User) {
        return this.http.post('http://localhost:3004/employees', user);
    }

    addToCart(item: Item) {
        return this.http.post('http://localhost:3002/MyCart', item);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('http://localhost:3002/MyCart/' + id);
    }

    public setUserName(data) {
        this.userName.next(data);
    }

    public getSelectedProduct(productId: string) {
        let body = '?id='+productId;
        return this.http.get('http://localhost:3002/MyCart/' +body);
      }
}