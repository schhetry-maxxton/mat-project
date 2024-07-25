import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  selectedValue: any;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'MERN stack'},
    {value: 'pizza-1', viewValue: 'MEAN Stack'},
    {value: 'tacos-2', viewValue: 'Devops'},
  ];

}
