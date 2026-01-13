import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { StoryComponent } from './pages/home/story/story.component';
import { IngredientsComponent } from './pages/home/ingredients/ingredients.component';
import { ChefsComponent } from './pages/home/chefs/chefs.component';
import { DeliveryComponent } from './pages/home/delivery/delivery.component';
import { PizzaListComponent } from './pages/pizza-list/pizza-list.component';
import {HttpClientModule} from '@angular/common/http';
import { BuildPizzaComponent } from './pages/build-pizza/build-pizza.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StoryComponent,
    IngredientsComponent,
    ChefsComponent,
    DeliveryComponent,
    PizzaListComponent,
    BuildPizzaComponent,
    ShoppingCartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
