import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    this.questionService
      .AddQuestion(newQuestion)
      .subscribe((res) => console.log(res));
    this.dialogRef.close();
  }
  ngOnInit(): void {}
  constructor(
    public dialogRef: MatDialogRef<QuestionFormComponent>,
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

  getBase64a() {
    const reader = new FileReader();

    const file = this.fileUpload.nativeElement?.files![1];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.firstPicture.setValue(reader.result, { emitEvent: false });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  getBase64b() {
    let files = this.fileUpload.nativeElement?.files!;
    if (files.length !== 2) {
      alert('Exactly 2 Pictures are needed');
    }

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      let file = files.item(i) as File;
      console.log(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (i == 0) {
          this.firstPicture.setValue(reader.result, { emitEvent: false });
        } else {
          this.secondPicture.setValue(reader.result, { emitEvent: false });
        }
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }
  public get firstPicture() {
    return this.questionForm.get('firstPicture') as FormControl;
  }
  public get secondPicture() {
    return this.questionForm.get('secondPicture') as FormControl;
  }
}
