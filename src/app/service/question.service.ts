import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../shared/util/constants';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(
    private http : HttpClient
  ){}
  getQuestions(examId: number): Observable<any> {
    const params = new HttpParams()
    .set('exam_id', examId)
    const header = { 'content-type': 'application/json' };
    const options = {
      params : params,
      headers: header,
      withCredentials: true,
    };
    return this.http.get(`${CONSTANTS.baseUrl}/exam/question`,options);
  }
}
