import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private questionService: QuestionService) {}
  questions: Question[] = [];
  currentQuestion: Question | undefined;

  ngOnInit(): void {
    this.questionService
      .getAllQuestions()
      .subscribe((res) => (this.questions = res));
  }
}
