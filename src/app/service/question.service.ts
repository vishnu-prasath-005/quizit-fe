import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONSTANTS } from '../shared/util/constants';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions : BehaviorSubject<[]> = new BehaviorSubject([]);
  totalExamTiming : BehaviorSubject<number> = new BehaviorSubject(0);
  
  constructor(private http: HttpClient) {}

  getQuestions(examId: number): Observable<any> {
    const params = new HttpParams().set('exam_id', examId);
    const options = {
      params: params,
      headers: CONSTANTS.bulidHeaders(),
    };
    return this.http.get(`${CONSTANTS.baseUrl}/exam/question`, options);
  }
}
