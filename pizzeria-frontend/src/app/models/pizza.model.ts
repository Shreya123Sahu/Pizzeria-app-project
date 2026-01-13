export interface Ingredient {
  id: number;
  iname : string;
  price:number;
  image:string
}

export interface Topping {
  id: string | number;
  tname: string;
  price: number;
  image:string
}

export interface Pizza {
  id: string;
  type: 'veg' | 'nonveg';
  price: number;
  name: string;
  image: string;
  description: string;
  ingredients: Ingredient[];
  topping: Topping[];
}
