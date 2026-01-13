import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
   baseurl = "http://localhost:8080/api"

  constructor(private http : HttpClient) { }
    getPizzaList(){
      return this.http.get(`${this.baseurl}/pizzas`);
    }

    getIngredients(){
      return this.http.get(`${this.baseurl}/buildPizza`)
    }


    
}
