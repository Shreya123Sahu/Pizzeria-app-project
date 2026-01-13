import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/models/pizza.model';
import { BuildpizzaService } from 'src/app/services/build-pizza.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit{
ingList:Ingredient[]=[];

  
  constructor(private pizzaService:PizzaService,private buildService:BuildpizzaService,private cdr :ChangeDetectorRef,private router : Router){}
  ngOnInit(): void {
    this.pizzaService.getIngredients().subscribe({
      next : (data:any)=>{
        this.ingList=data.ingList;
        this.cdr.detectChanges();
        console.log("Ingredient list",this.ingList);

        
      },
      error:(error)=>{
        console.log("Error in ing-list",error.message);
        
      }
    })

  }

    toggle(item: any) {
    this.buildService.toggle(item);
  }

  isSelected(id: number) {
    return this.buildService.isSelected(id);
  }

  total() {
    return this.buildService.getIngredientsTotal();
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
