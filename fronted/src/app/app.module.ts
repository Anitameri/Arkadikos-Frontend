import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { ProductdetailComponent } from './components/pages/productdetail/productdetail.component';
import { LoginregisterComponent } from './components/pages/loginregister/loginregister.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

import { FormPlusImageComponent } from './components/pages/form-plus-image/form-plus-image.component';
import { MainComponent } from './components/pages/home/main/main.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ProductformComponent } from './components/pages/productform/productform.component';
import { ProductlistComponent } from './components/pages/home/productlist/productlist.component';
import { SlideshowComponent } from './components/pages/home/slideshow/slideshow.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    SlideshowComponent,
    ProductlistComponent,
    FormPlusImageComponent,
    ProductformComponent,
    ProductdetailComponent,
    LoginregisterComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [

     BrowserModule,
     AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
