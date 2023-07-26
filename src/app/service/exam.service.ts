import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONSTANTS } from '../shared/util/constants';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  examDetails = new BehaviorSubject([]);
  isExamStarted = new BehaviorSubject(false); 
  
  constructor(private http: HttpClient) {}

  getAllExam(): Observable<any> {
    const header = CONSTANTS.bulidHeaders()
    const options = {
      headers: header,
    };
    return this.http.get(`${CONSTANTS.baseUrl}/exam`, options);
  }
}
