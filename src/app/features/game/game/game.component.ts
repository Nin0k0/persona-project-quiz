import { JsonPipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { map, timeInterval } from 'rxjs';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private questionService: QuestionService) {}
  QuestionList!: Question[];
  currentQuestionIndex: number = 0;
  currentAnswerArr: string[] = [];
  currentAnswer: string = '';
  isGameStarted = false;
  score: number = 0;
  formArr = new FormArray<FormControl<string>>([]);

  ngOnInit(): void {
    this.getAllQs();
  }

  getAllQs() {
    this.questionService.getAllQuestions()!.subscribe((response) => {
      this.QuestionList = response;
      this.other();
    });
  }

  other() {
    this.getWordFunc();
    this.formArr.valueChanges
      .pipe(
        map((data) => {
          if (data.length > 0) {
            return data.reduce((a, b) => a + b);
          }
          return null;
        })
      )
      .subscribe((data) => {
        if (
          data?.toLocaleLowerCase() == this.currentAnswer.toLocaleLowerCase()
        ) {
          //დავამატო ქულა
          this.score += 1;

          this.currentQuestionIndex += 1;
          if (this.currentQuestionIndex > this.currentAnswer.length) {
            //gadavide sxva mode-ze da morches kitxvebi
          }
          while (this.formArr.length !== 0) {
            this.formArr.removeAt(0);
          }
          this.getWordFunc();
        }
      });
  }

  getWordFunc() {
    this.currentAnswer = this.QuestionList![this.currentQuestionIndex]!.answer;
    this.currentAnswerArr =
      this.QuestionList![this.currentQuestionIndex]!.answer.split('');
    this.currentAnswerArr.forEach(() => {
      const fcontrol = new FormControl('', { nonNullable: true });
      fcontrol.valueChanges.subscribe((val) => {
        if (val.length == 2) {
          fcontrol.setValue(val[1]);
        }
      });
      this.formArr.push(fcontrol);
    });
  }
}
