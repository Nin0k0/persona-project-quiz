import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LeaderboardComponent],
  imports: [CommonModule, LeaderboardRoutingModule, HttpClientModule],
})
export class LeaderboardModule {}
