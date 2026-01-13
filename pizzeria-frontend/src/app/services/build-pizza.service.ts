import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuildpizzaService {

  private selected: any[] = [];

  constructor() {
    const saved = localStorage.getItem('buildPizzaSelection');
    if (saved) this.selected = JSON.parse(saved);
  }

  toggle(item: any) {
    const exists = this.selected.find(i => i.id === item.id);

    if (exists) {
      this.selected = this.selected.filter(i => i.id !== item.id);
    } else {
      this.selected.push(item);
    }

    this.save();
  }

  private save() {
    localStorage.setItem('buildPizzaSelection', JSON.stringify(this.selected));
  }

  isSelected(id: number) {
    return this.selected.some(i => i.id === id);
  }

  getSelectedItems() {
    return this.selected;
  }

  getIngredientsTotal() {
    return this.selected.reduce((sum, i) => sum + i.price, 0);
  }

  clearIngredients() {
    this.selected = [];
    this.save();
  }
}