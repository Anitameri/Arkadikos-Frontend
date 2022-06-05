import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/pages/home/main/main.component';
import { ProductdetailComponent } from './components/pages/productdetail/productdetail.component';
import { ProductformComponent } from './components/pages/productform/productform.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'create', component: ProductformComponent },
  { path: 'product/:productId', component: ProductdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
