import { Component, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, take } from 'rxjs';
import { ExamService } from 'src/app/service/exam.service';
import { QuestionService } from 'src/app/service/question.service';
import { ReportService } from 'src/app/service/report.service';
import { Exam, Questions, QuestionWithSubmittedAnswers} from 'src/app/shared/util/interfaces';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {

  examId: number = this.route.snapshot.queryParams['examId'];
  examScore: number = 0;
  questions: Questions[] = [];
  isSubmitted = false;
  examDetails : Exam ;
  questionWithSubmittedAnswers: any[] = [];
  verdict : string = '';
  timer : number = 0;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private examService : ExamService,
    private reportService : ReportService
  ) {}

  ngOnInit() {
    this.questionService.getQuestions(this.examId).subscribe({
      next: (data) => {
        this.questions = data;
        this.startTimer();
        this.questionWithSubmittedAnswers = this.questions.map
          (questions => {
            return { question: questions.question, score: 0 };
          }
        );
      },
    });

    this.getExamDetails();
  }

  checkAnswer(event: any, question: string) {
    if (event.value.is_correct_option) {
      this.questionWithSubmittedAnswers.find(
        (questions) => questions.question === question
      ).score = 1
    } else {
      this.questionWithSubmittedAnswers.find(
        (questions) => questions.question === question
      ).score = 0;
    }
  }

  startTimer(){
       interval(1000).pipe(
      take(20) 
    ).subscribe({
      next : data => {
        this.timer = data + 1;
      },
      error : err => {},
      complete :  () => {
           this.submitExam();
      }
    })
  }

  submitExam() {
    this.isSubmitted = true;
    this.examService.isExamStarted.next(false);
    this.examScore = this.questionWithSubmittedAnswers.reduce(
      (total, questions) => total + questions.score,
      0
    );
    this.verdict = this.examScore >= this.examDetails.pass_marks ? 'Pass' : 'Fail';
    this.reportService.postReport({
      userId : JSON.parse(localStorage.getItem('user') as string).user_id,
      examId : this.examId,
      obatinedMarks : this.examScore,
      verdict : this.verdict
    }).subscribe()
  }

  getExamDetails () {
    this.examService.examDetails.subscribe({
      next : data => {
        this.examDetails = data.filter((exam: Exam) => exam.exam_id  == this.examId)[0];
      }
    })
  }

}
