import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '../shared/util/constants';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient) {}

  postReport(report: {}) {
    const body = JSON.stringify(report);
    const options = {
      headers: CONSTANTS.bulidHeaders()
    };
    return this.http.post(`${CONSTANTS.baseUrl}/user/reports`, body, options);
  }

  getReportByUserId(userId: string) {
    const params = new HttpParams().set('userId', userId);
    const options = {
      headers: CONSTANTS.bulidHeaders(),
      params: params
    };
    return this.http.get(`${CONSTANTS.baseUrl}/user/reports`, options);
  }
}
