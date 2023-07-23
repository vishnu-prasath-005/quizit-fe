import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/service/auth-api.service';
import { CONSTANTS } from 'src/app/shared/util/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.pattern(CONSTANTS.patterns.email)),
    password: new FormControl('', Validators.required),
  });
  constructor(private authApiService: AuthApiService, private router: Router) {}

  loginUser() {
    this.authApiService
      .login({ email: this.email, password: this.password })
      .subscribe({
        next: (data) => {
          this.router.navigate(['app/user']);
        },
        error: (err) => {
          alert(err.error);
        },
      });
  }
}
