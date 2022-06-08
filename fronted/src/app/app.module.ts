import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
=======
import { HeaderComponent } from './components/layout/header/header.component';
import { MainComponent } from './components/pages/home/main/main.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SlideshowComponent } from './components/pages/home/slideshow/slideshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductlistComponent } from './components/pages/home/productlist/productlist.component';
import { ProductformComponent } from './components/pages/productform/productform.component';
import { ProductdetailComponent } from './components/pages/productdetail/productdetail.component';
import { LoginregisterComponent } from './components/pages/loginregister/loginregister.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
>>>>>>> f343702445c94d94cbc41593d540959a56a8dbba

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    SlideshowComponent,
<<<<<<< HEAD
    ProductlistComponent
=======
    ProductlistComponent,
    ProductformComponent,
    ProductdetailComponent,
    LoginregisterComponent,
    CheckoutComponent
>>>>>>> f343702445c94d94cbc41593d540959a56a8dbba
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
