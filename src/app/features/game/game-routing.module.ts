import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { GameNewComponent } from './game-new/game-new.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GameNewComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class GameRoutingModule {}
