import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/service/auth-api.service';
import { CONSTANTS } from 'src/app/shared/util/constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name : string = '';
  email : string = '';
  password : string = '';
  signupForm : FormGroup = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.pattern(CONSTANTS.patterns.email)),
    password : new FormControl('', Validators.required)
  })
  constructor(
    private authApiService : AuthApiService,
    private router: Router,
  ){}
  registerUser(){
     this.authApiService.signup({name : this.name, email : this.email, password : this.password}).subscribe({
      next : data => {  
        this.router.navigate(['app/login'])
      },
      error : err => {
       alert(err.error)
      }
     })
  }
}
