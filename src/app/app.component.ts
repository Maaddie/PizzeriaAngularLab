import { Component } from '@angular/core';
import { Menu } from './Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "Welcome to Maddy's Pizza";
  
  allMenuItems : Menu [] = [new Menu("Pepperoni Pizza", "Dinner", 12.99),
  new Menu("Supreme Pizza", "Dinner", 12.99),
  new Menu("Meatball Sandwich", "Dinner", 12.99),
  new Menu("Chicken Fingers", "Dinner", 9.99),
  new Menu("Tuna Sandwich", "Lunch", 8.99),
  new Menu("Soup of the Day", "Lunch", 5.99),
  new Menu("Antipasti Salad", "Side", 10.99),
  new Menu("Caesar Salad", "Side", 10.99),
  new Menu("Wings", "Side", 8.99)];
  
}
