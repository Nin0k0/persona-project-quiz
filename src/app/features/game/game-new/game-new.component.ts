import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/shared/services/question.service';
import { CorrectComponent } from '../correct/correct.component';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.scss'],
})
export class GameNewComponent implements OnInit {
  score: number = 0;
  skipCount: number = 1;
  constructor(
    private questionService: QuestionService,
    private snackBar: MatSnackBar
  ) {}
  formArr = new FormArray<FormControl<string>>([]);
  questions!: Question[];
  currentQuestion!: Question;
  currentAnswerArr: string[] = [];

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getAllQuestions()!.subscribe((response) => {
      this.questions = response;
      this.main();
    });
  }

  getRandomQuestion() {
    this.currentQuestion =
      this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  getCurrQuestionIndex() {
    return this.questions.findIndex(
      (elem) => elem.id === this.currentQuestion.id
    );
  }

  getWordFunc() {
    this.getRandomQuestion();
    this.currentAnswerArr = this.currentQuestion.answer.split('');
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

  main() {
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
          data?.toLocaleLowerCase() == this.currentQuestion.answer.toLowerCase()
        ) {
          //დავამატო ქულა
          this.score += 1;
          // ჯერ წავშალო კითხვა ლისთიდან
          this.nextActions();
          this.openSnackBar();
        }
      });
  }

  clearformArray() {
    while (this.formArr.length !== 0) {
      this.formArr.removeAt(0);
    }
  }
  nextActions() {
    this.questions.splice(this.getCurrQuestionIndex(), 1);
    //მერე ვიპოვო რენდომი კითხვა
    this.getRandomQuestion();
    //გავასუფთავო ფორმერეეი
    this.clearformArray();
    //შევქმნა თავიდან  ფორმერრეი

    if (this.questions.length < 0) {
      //gadavide sxva mode-ze da morches kitxvebi
    }
    while (this.formArr.length !== 0) {
      this.formArr.removeAt(0);
    }
    this.getWordFunc();
  }
  openSnackBar() {
    this.snackBar.openFromComponent(CorrectComponent, {
      duration: 3000,
    });
  }

  Skip() {
    this.nextActions();
    this.skipCount -= 1;
  }
}
