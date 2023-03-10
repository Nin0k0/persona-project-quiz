import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  constructor(private userService: AuthService) {}
  users!: User[];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers()!.subscribe((response) => {
      this.users = response;
      this.users = this.users.sort((a, b) => (a.score > b.score ? -1 : 1));
      if (this.users.length > 10) {
        this.users = this.users.splice(0, 10);
      }
      //TOP 10
    });
  }
}
