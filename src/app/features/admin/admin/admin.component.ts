import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { QuestionFormComponent } from '../question-form/question-form.component';

import { MatDialog } from '@angular/material/dialog';
import { QuestionService } from 'src/app/shared/services/question.service';
import { Question } from 'src/app/interfaces/question';
import { tap, retry, catchError, of } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  windowScrolling: any;
  constructor(
    public dialog: MatDialog,
    private viewContainerRef: ViewContainerRef,
    private questionService: QuestionService
  ) {}

  QuestionList: Question[] | undefined;

  ngOnInit(): void {
    this.getQuestions();
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  openDialog(): void {
    const dialog = this.dialog.open(QuestionFormComponent, {
      viewContainerRef: this.viewContainerRef,
    });

    dialog.afterClosed().subscribe(() => {
      // Do stuff after the dialog has closed
      this.getQuestions();
    });
  }

  getQuestions() {
    this.questionService.getAllQuestions().subscribe((response) => {
      this.QuestionList = response;
    });
  }
  delete(questionId: number, index: number) {
    this.questionService
      .deleteQuestion(questionId)
      .pipe(
        tap(() => {
          this.QuestionList!.splice(index, 1);
        }),
        retry(2),
        catchError(() => {
          alert('Enecpexted Error Occured!');
          return of(null);
        })
      )
      .subscribe();
  }
}
function getQuestions() {
  throw new Error('Function not implemented.');
}
