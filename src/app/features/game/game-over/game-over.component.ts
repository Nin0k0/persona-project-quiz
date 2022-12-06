import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent implements OnInit {
  constructor(private authService: AuthService) {}
  currentUser!: User;
  ngOnInit(): void {
    let user: User = JSON.parse(localStorage.getItem('user')!);
    this.authService.getUser(user.email).subscribe((data) => {
      if (data) {
        this.currentUser = data;
      }
    });
  }
}
