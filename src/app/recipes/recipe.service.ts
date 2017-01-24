import { Injectable } from '@angular/core';

import { Recipe } from "./recipe";
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {
  private  recipes: Recipe[] = [
    new Recipe('chhesy egg' ,'very tasty', 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/16/20/enhanced/webdr09/enhanced-12399-1447722660-1.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Hot Chocolate', 'yummy', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/32/2015/10/mint-hot-chocolate.jpg', [
       new Ingredient('Choco Nuts', 2),
      new Ingredient('Choco Sticks', 1)
    ])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
