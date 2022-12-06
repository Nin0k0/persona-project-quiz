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
      if (this.users.length < 10) {
        //
      }
    });
  }
}
