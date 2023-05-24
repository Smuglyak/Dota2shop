import { Component } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent {

constructor(){}

restartGame(): void {
    // Reload the page to restart the game
    console.log("Reloading the game...");
    window.location.reload();
  }

}
