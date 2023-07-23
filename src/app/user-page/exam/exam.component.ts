import { Component } from '@angular/core';
import { ExamService } from 'src/app/service/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent {
  exams : any[] = []
  constructor(
    private examService : ExamService
  ) {}
  ngOnInit() {
    this.examService.getAllExam().subscribe({
      next : data => {
        this.exams = data
      },
      error : err => {
        alert(err.error)
      }
    })
  }
}
