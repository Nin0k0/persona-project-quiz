import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { GameComponent } from './game/game.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [QuestionComponent, GameComponent],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
