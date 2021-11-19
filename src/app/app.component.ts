import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-project';
  tabSelected:string = 'recipes';

  changeTab(tab:string){
    this.tabSelected = tab;
  }

}
