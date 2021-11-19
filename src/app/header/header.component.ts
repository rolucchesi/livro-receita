import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    // showRecipesTab = true;
    // showShoplistTab = false;

    @Output() tabSelectFired = new EventEmitter<string>()

    constructor(){

    }

    onSelect(tab:string){
        this.tabSelectFired.emit(tab)
    }


}