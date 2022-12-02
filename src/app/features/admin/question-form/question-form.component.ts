import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit, AfterViewInit {
  @ViewChild('fileUpload')
  public fileUpload!: ElementRef<HTMLInputElement>;

  add() {
    const newQuestion: Question = this.questionForm.value as Question;
    console.log(newQuestion);
    this.questionService.AddQuestion(newQuestion);
  }
  ngOnInit(): void {}
  constructor(
    public dialogRef: MatDialogRef<QuestionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private questionService: QuestionService
  ) {}
  ngAfterViewInit(): void {
    console.log(this.fileUpload);
  }
  questionForm = new FormGroup({
    firstPicture: new FormControl('', [Validators.required]),
    secondPicture: new FormControl('', [Validators.required]),
    answer: new FormControl('', [Validators.required]),
  });

  Close() {
    this.dialogRef.close();
  }

  getBase64(controllName: string) {
    const reader = new FileReader();
    const file = this.fileUpload.nativeElement?.files![0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (controllName === 'firstPicture') {
        this.firstPicture.setValue(reader.result, { emitEvent: false });
      }
      if (controllName === 'secondPicture') {
        this.secondPicture.setValue(reader.result, { emitEvent: false });
      }
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  public get firstPicture() {
    return this.questionForm.get('firstPicture') as FormControl;
  }
  public get secondPicture() {
    return this.questionForm.get('secondPicture') as FormControl;
  }
}
