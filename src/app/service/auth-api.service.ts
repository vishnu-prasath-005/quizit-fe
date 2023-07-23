import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../shared/util/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private http : HttpClient) {}
    login(user: {}): Observable<any> {
     const headers = this.bulidHeaders();
     const body = JSON.stringify(user);
     const options = {
      headers : headers,
      withCredentials : true
     }
     return this.http.post(`${CONSTANTS.baseUrl}/user/login`, body, options);
  }

  signup(user: {}): Observable<any> {
    const headers = this.bulidHeaders();
    const body = JSON.stringify(user);
    const options = {
      headers : headers,
      withCredentials : true
    }
    return this.http.post(`${CONSTANTS.baseUrl}/user/signup`, body, options);
  }

  checkToken() : Observable<any>{
    const header = this.bulidHeaders();
    const options = {
      headers : header,
      withCredentials : true
    };
    return this.http.get(`${CONSTANTS.baseUrl}/check/token`, options);
  }

  bulidHeaders() {
    return {'content-type': 'application/json'}
  }
}
