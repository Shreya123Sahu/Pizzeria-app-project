import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { CartService } from 'src/app/services/cart.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
   pizzas:any[]=[];
    // cartItems: CartItem[] = [];
    totalAmount = 0;
  
    constructor(public cartService: CartService,
      private pizzaService: PizzaService,
      private cdr:ChangeDetectorRef
    ) { }
  
    ngOnInit(): void {
      this.pizzaService.getPizzaList().subscribe({
        next : (data:any)=>{
          this.pizzas=data.pizzaList;
          console.log(data.pizzaList);
          
        },
        error:(error)=>{
          console.log("Error in pizza-list",error.message);
          
        }
      })
       this.cdr.detectChanges();
    }
  
    isInCart(id: string) {
      return this.cartService.isInCart(id);
    }
  
    toggleCart(pizza: any) {
      if (this.cartService.isInCart(pizza.id)) {
        this.cartService.removeFromCart(pizza.id);
      } else {
        this.cartService.addToCart(pizza);
      }
    }
}
