import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
// jsonp
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainComponent } from './components/pages/home/main/main.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SlideshowComponent } from './components/pages/home/slideshow/slideshow.component';
import { ProductlistComponent } from './components/pages/home/productlist/productlist.component';
import { ProductformComponent } from './components/pages/productform/productform.component';
import { ProductdetailComponent } from './components/pages/productdetail/productdetail.component';
// import { LoginregisterComponent } from './components/pages/loginregister/loginregister.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

import { FormPlusImageComponent } from './components/pages/form-plus-image/form-plus-image.component';
import { SliderBComponent } from './components/pages/slider-b/slider-b.component';
import { LoginregisterComponent } from './components/pages/loginregister/loginregister.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    SliderBComponent,
    LoginregisterComponent,
    SlideshowComponent,
    ProductlistComponent,
    FormPlusImageComponent,
    ProductformComponent,
    ProductdetailComponent,
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
     HttpClientJsonpModule,
     NgbModule
  ],
  providers: [ NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
