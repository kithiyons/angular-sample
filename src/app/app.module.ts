import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MessagesComponent }    from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './users/user-list.component';
import { ProductComponent } from './product/product.component';
import { CakesComponent } from './cakes/cakes.component';
import { ItemsComponent } from './items/items.component';
import { MycartComponent } from './mycart/mycart.component';
import { CardsComponent } from './cards/cards.component';
import { PaymentComponent } from './payment/payment.component';
import { CardItemsComponent } from './card-items/card-items.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    UserListComponent,
    ProductComponent,
    CakesComponent,
    ItemsComponent,
    MycartComponent,
    CardsComponent,
    PaymentComponent,
    CardItemsComponent
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService

    // provider used to create fake backend
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }