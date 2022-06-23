import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { MainComponent } from './components/pages/home/main/main.component';
import { LoginregisterComponent } from './components/pages/loginregister/loginregister.component';
import { OneproductComponent } from './components/pages/oneproduct/oneproduct.component';
import { ProductdetailComponent } from './components/pages/productdetail/productdetail.component';
import { ProductformComponent } from './components/pages/productform/productform.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login-register', component: LoginregisterComponent},
  { path: 'create', component: ProductformComponent },
  { path: 'product/:productId', component: ProductdetailComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'oneproduct', component: OneproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
