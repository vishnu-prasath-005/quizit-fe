import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/service/auth-api.service';
import { CONSTANTS } from 'src/app/shared/util/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword : boolean = false;
  email: string = '';
  password: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.pattern(CONSTANTS.patterns.email), Validators.required]),
    password: new FormControl('', Validators.required)
  });
  
  constructor(
    private authApiService: AuthApiService,
    private router: Router
  ) {}

  loginUser() {
    this.authApiService.login({ email: this.email, password: this.password }).subscribe({
      next: (userData) => {
        localStorage.setItem('user', JSON.stringify(userData.userDetails));
        this.router.navigate(['app/user']);
      },
      error: (err) => {
        alert(err.error);
      }
    });
  }
}
