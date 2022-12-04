import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { GameComponent } from './game/game.component';
import { GameRoutingModule } from './game-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuestionComponent, GameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class GameModule {}
