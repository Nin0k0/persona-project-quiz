import { Component, Input, OnInit } from '@angular/core';
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
  @Input() scoredNow: number | null = null;
  ngOnInit(): void {}
}
