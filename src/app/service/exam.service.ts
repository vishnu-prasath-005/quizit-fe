import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../shared/util/constants';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient) {}
  getAllExam(): Observable<any> {
    const header = { 'content-type': 'application/json' };
    const options = {
      headers : header,
      withCredentials : true
    };
    return this.http.get(`${CONSTANTS.baseUrl}/exam`, options)
  }
  
}
