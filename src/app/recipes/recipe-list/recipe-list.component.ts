import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Macarrão', 'Isso é apenas um teste', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_960,c_limit/0621-Sheet-Pan-Gnocchi.jpg'),
    new Recipe('Feijoada', 'Isso é apenas um teste', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_960,c_limit/0621-Sheet-Pan-Gnocchi.jpg')
  ];

  @Output() selectRecipeFired = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe:Recipe){
    this.selectRecipeFired.emit(recipe)
  }

}
