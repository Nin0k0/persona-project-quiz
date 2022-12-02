import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private localURL = 'http://localhost:3000/questions';
  constructor(private http: HttpClient) {}

  AddQuestion(quest: Question) {
    console.log(quest);
    return this.http.post<Question>(this.localURL, quest);
  }

  getAllQuestions() {
    return this.http.get(this.localURL);
  }
}
