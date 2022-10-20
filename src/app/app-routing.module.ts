import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './componant/cart/cart.component';
import { ProductComponent } from './componant/product/product.component';



const routes: Routes = [
  {path:'product' , component:ProductComponent},
  {path:'cart' , component:CartComponent},
  {path:'' , redirectTo:'product' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
