import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private questionService: QuestionService) {}
  QuestionList: Question[] | undefined;
  currentQuestionIndex: number = 2;
  currentAnswerArr: string[] = [];
  currentAnswer: string = '';
  isGameStarted = false;
  ngOnInit(): void {
    this.getAllQs();
  }

  getAllQs() {
    this.questionService.getAllQuestions().subscribe((response) => {
      this.QuestionList = response;
    });
  }

  Play() {
    this.isGameStarted = true;
    this.currentAnswer = this.QuestionList![this.currentQuestionIndex].answer;
    for (let letter of this.currentAnswer) {
      this.currentAnswerArr.push(letter);
    }
  }
}
