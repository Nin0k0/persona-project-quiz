import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LeaderboardComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class LeaderboardRoutingModule {}
