import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PricesComponent} from './pages/prices/prices.component'

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'prices', component: PricesComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
