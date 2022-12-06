import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home/home.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'leaderboard',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then(
        (module) => module.AdminModule
      ),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'leaderboard',
    loadChildren: () =>
      import('./features/leaderboard/leaderboard.module').then(
        (module) => module.LeaderboardModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./features/game/game.module').then((module) => module.GameModule),
    canLoad: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
