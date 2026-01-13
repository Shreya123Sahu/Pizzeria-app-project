import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuildpizzaService } from 'src/app/services/build-pizza.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
cartItems: any[] = [];
  subTotal = 0;
  ingredientTotal = 0;

  constructor(
    public cartService:CartService,
    public ingredientService: BuildpizzaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.ingredientTotal = this.ingredientService.getIngredientsTotal();
    this.calculateSubTotal();
  }

  calculateSubTotal() {
    this.subTotal = this.cartItems.reduce((sum: any, item: any) => {
      console.log(item);
      return sum + (item.price * item.qty);
    }, 0);
  }

  increaseQty(item:any) {
    item.qty++;
    this.cartService.updateCart(this.cartItems);
    this.calculateSubTotal();
  }

  decreaseQty(item:any) {
    if (item.qty > 1) {
      item.qty--;
      this.cartService.updateCart(this.cartItems);
      this.calculateSubTotal();
    }
  }

  removeItem(id: string) {
    this.cartService.removeFromCart(id);
    this.cartItems = this.cartService.getCart();
    this.calculateSubTotal();
  }

  payNow() {
    if (confirm("Are you sure you want to pay and order the pizzas?")) {
      this.cartService.clearCart();
      this.ingredientService.clearIngredients();

      alert("Order placed successfully!");
      this.router.navigate(['/']);
    }
  }

  cancel() {
    this.router.navigate(['/order']);
  }

  goToOrder() {
    this.router.navigate(['/order']);
  }
}
