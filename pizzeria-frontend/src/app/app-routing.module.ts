import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PizzaService } from './services/pizza.service';
import { PizzaListComponent } from './pages/pizza-list/pizza-list.component';
import { BuildPizzaComponent } from './pages/build-pizza/build-pizza.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'pizzas',component:PizzaListComponent},
  {path:'buildPizza',component:BuildPizzaComponent },
  {path:'cart',component:ShoppingCartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
