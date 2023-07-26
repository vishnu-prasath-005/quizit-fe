import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../shared/util/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  
  constructor(private http: HttpClient) {}

  login(user: {}): Observable<any> {
    const body = JSON.stringify(user);
    const options = {
      headers: CONSTANTS.bulidHeaders(),
      withCredentials: true
    };
    return this.http.post(`${CONSTANTS.baseUrl}/user/login`, body, options);
  }

  signup(user: {}): Observable<any> {
    const body = JSON.stringify(user);
    const options = {
      headers: CONSTANTS.bulidHeaders(),
      withCredentials: true
    };
    return this.http.post(`${CONSTANTS.baseUrl}/user/signup`, body, options);
  }

  checkToken(): Observable<any> {
    const options = {
      headers: CONSTANTS.bulidHeaders(),
      withCredentials: true
    };
    return this.http.get(`${CONSTANTS.baseUrl}/check/token`, options);
  }

  logout(): Observable<any> {
    const options = {
      headers: CONSTANTS.bulidHeaders(),
      withCredentials: true
    };
    return this.http.get(`${CONSTANTS.baseUrl}/user/logout`, options);
  }
}
