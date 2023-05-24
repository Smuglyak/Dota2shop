import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BirdComponent } from './bird/bird.component';
import { PipesComponent } from './pipes/pipes.component';
import { GameOverComponent } from './game-over/game-over.component';
import { ScoreDisplayComponent } from './score-display/score-display.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdComponent,
    PipesComponent,
    GameOverComponent,
    ScoreDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
