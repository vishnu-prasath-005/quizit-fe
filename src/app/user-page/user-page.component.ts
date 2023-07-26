import { Component } from '@angular/core';
import { ExamService } from '../service/exam.service';
import { AuthApiService } from '../service/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  isExamStarted: boolean;

  constructor(
    private examService: ExamService,
    private authService: AuthApiService,
    private router: Router
  ) {
    this.examService.isExamStarted.subscribe({
      next: (data) => (this.isExamStarted = data)
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['app/login']);
      },
      error: (err) => {
        alert(err);
      }
    });
  }
}
