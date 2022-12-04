import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  skip() {
    console.log(this.wordForm.value);
  }

  constructor(
    private questionService: QuestionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  QuestionList: Question[] | undefined;
  currentQuestionIndex: number = 2;
  currentAnswerArr: string[] = [];
  currentAnswer: string = '';
  isGameStarted = false;
  wordForm = this.formBuilder.group({
    letters: this.formBuilder.array([]),
  });

  mytrying: any[] = [];
  ngOnInit(): void {
    this.getAllQs();
    this.mytrying = [];
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

  written(str: string, index: number) {
    this.mytrying.push({ ind: index, value: str });
  }
}
