import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartItemsSubject = new BehaviorSubject<any[]>(
    JSON.parse(localStorage.getItem('cart') || '[]')
  );

  cartItems$ = this.cartItemsSubject.asObservable();

  getCart() {
    return this.cartItemsSubject.value;
  }

  private saveCart(items: any[]) {
    localStorage.setItem('cart', JSON.stringify(items));
    this.cartItemsSubject.next(items);
  }

  addToCart(pizza: any) {
    const cart = this.getCart();
    const exists = cart.find(p => p.id === pizza.id);

    if (exists) {
      exists.qty++;      // increase quantity if already in cart
    } else {
      cart.push({ ...pizza, qty: 1 }); // default qty = 1
    }

    this.saveCart(cart);
  }

  removeFromCart(id: string) {
    const updated = this.getCart().filter(p => p.id !== id);
    this.saveCart(updated);
  }

  isInCart(id: string) {
    return this.getCart().some(p => p.id === id);
  }

  updateCart(items: any[]) {
    this.saveCart(items);
  }

  clearCart() {
    this.saveCart([]);
  }
}