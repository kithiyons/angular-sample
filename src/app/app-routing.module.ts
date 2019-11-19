import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent }  from './login/login.component';
import { RegistrationComponent }  from './registration/registration.component';
import { UserListComponent }  from './users/user-list.component';
import { ProductComponent }  from './product/product.component';
import { CakesComponent }  from './cakes/cakes.component';
import { ItemsComponent }  from './items/items.component';
import { CardsComponent }  from './cards/cards.component';
import { MycartComponent }  from './mycart/mycart.component';
import { PaymentComponent }  from './payment/payment.component';
import { CardItemsComponent }  from './card-items/card-items.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cakes', component: CakesComponent },
  { path: 'items/:id', component: ItemsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'users', component: UserListComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'mycart', component: MycartComponent },
  { path: 'payment/:id', component: PaymentComponent},
  { path: 'card-items', component: CardItemsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}