import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/components/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Lasagna', 'A pasta done in layers of meat, cheese and sauce', 'https://www.superama.com.mx/views/micrositio/recetas/images/masbuscadas/lasagna/Web_fotoreceta.jpg',
         [new Ingredient('Meat', 1),
          new Ingredient('Flat Pasta', 8),
          new Ingredient('Tomato Souce', 1),
          new Ingredient('Vegetables', 0.5),
          new Ingredient('Cheese', 2)]),
        new Recipe('Apple pie', 'A dessert pie made of pie', 'https://www.comedera.com/wp-content/uploads/2015/02/receta-de-pie-de-manzana.jpg',
         [new Ingredient('Apples', 6),
          new Ingredient('Pastry', 2),
          new Ingredient('Sugar', 1.5),
          new Ingredient('Canela', 0.5),
          new Ingredient('Vanilla', 1)]) 
        //new Recipe('Apple pie', 'A dessert pie made of pie', 'https://www.comedera.com/wp-content/uploads/2015/02/receta-de-pie-de-manzana.jpg')
    ];

    constructor(private shopService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); //new recipe array without accesing into the original
    }

    addShoppingList(ingredients: Ingredient[]) {
        this.shopService.addIng(ingredients);
    }
}