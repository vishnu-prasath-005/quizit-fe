import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/service/exam.service';
import { Exam } from '../../shared/util/interfaces';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent {
  exams: Exam[] = [];

  constructor(
    private examService: ExamService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.examService.getAllExam().subscribe({
      next: (examData) => {
        this.examService.examDetails.next(examData);
        this.exams = examData;
      },
      error: (err) => {
        alert(err.error);
      }
    });
  }

  startExam(exam_id: number) {
    this.examService.isExamStarted.next(true);
    this.router.navigate(['instruction'], {
      relativeTo: this.route,
      queryParams: { examId: exam_id }
    });
  }
}
