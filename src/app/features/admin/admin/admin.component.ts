import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { QuestionFormComponent } from '../question-form/question-form.component';

import { MatDialog } from '@angular/material/dialog';
import { QuestionService } from 'src/app/shared/services/question.service';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private viewContainerRef: ViewContainerRef,
    private questionService: QuestionService
  ) {}

  QuestionList: Question[] | undefined;

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe((response) => {
      this.QuestionList = response;
    });
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
    const dialogRef = this.dialog.open(QuestionFormComponent, {
      viewContainerRef: this.viewContainerRef,
    });
  }
}
