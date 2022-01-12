import { NoopAnimationPlayer } from "@angular/animations";

export class Menu{
    Item : string;
    Category: string;
    Price: number;
    
    
    constructor(item: string, category: string, price: number){
        this.Item = item;
        this.Category = category;
        this.Price = price;

    }
}