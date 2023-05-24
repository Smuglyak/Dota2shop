import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  title = 'Dota2shop';

  currentScore: number = 0;
  
  isGameOver: boolean = false;

  constructor() { }

  handleGameOver(): void {
    this.isGameOver = true;
  }
  
}
