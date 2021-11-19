import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeData:Recipe = new Recipe('Selecione uma receita', 'Descrição', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_960,c_limit/0621-Sheet-Pan-Gnocchi.jpg')

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe:Recipe){
    this.recipeData = recipe
  }

}
