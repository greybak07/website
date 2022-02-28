import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar/navbar.component';

//Rutas
import {APP_ROUTING} from './app.routes';
import {PricesComponent} from './pages/prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
