import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar/navbar.component';

//Rutas
import {APP_ROUTING} from './app.routes';
import {PricesComponent} from './pages/prices/prices.component';
import { HomeComponent } from './pages/home/home.component';
import {ImageModule} from "primeng/image";
import {DividerModule} from "primeng/divider";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PricesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    ImageModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
