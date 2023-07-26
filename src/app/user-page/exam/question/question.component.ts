import { Component, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval, take } from 'rxjs';
import { ExamService } from 'src/app/service/exam.service';
import { QuestionService } from 'src/app/service/question.service';
import { ReportService } from 'src/app/service/report.service';
import { Exam, QuestionWithSubmittedAnswers, Questions, Choices } from 'src/app/shared/util/interfaces';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  examId: number = this.route.snapshot.queryParams['examId'];
  examScore: number = 0;
  questions: Questions[] = [];
  isSubmitted : boolean = false;
  examDetails: Exam;
  questionWithSubmittedAnswers: any[] = [];
  verdict: string = '';
  currentQuestionIndex: number = 0;
  currentQuestion: any;
  questionTimer: number = 0;
  currentQuestionTiming: number;
  questionSubscriber: Subscription;
  isShowAnswers: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private examService: ExamService,
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllQuestions();
    this.getExamDetails();
  }

  checkAnswer(event: MatRadioChange, question: string) {
    if (event.value.is_correct_option) {
      this.questionWithSubmittedAnswers.find((questions) => questions.question === question).score = 1;
    }
  }

  submitExam() {
    this.isSubmitted = true;
    this.questionSubscriber.unsubscribe();
    this.examService.isExamStarted.next(false);
    this.examScore = this.questionWithSubmittedAnswers.reduce((total, questions) => total + questions.score, 0);
    this.verdict = this.examScore >= this.examDetails.pass_marks ? 'Pass' : 'Fail';
    this.reportService
      .postReport({
        userId: JSON.parse(localStorage.getItem('user') as string).user_id,
        examId: this.examId,
        obatinedMarks: this.examScore,
        verdict: this.verdict
      })
      .subscribe();
  }

  getExamDetails() {
    this.examService.examDetails.subscribe({
      next: (data) => {
        this.examDetails = data.filter((exam: Exam) => exam.exam_id == this.examId)[0];
      }
    });
  }

  getAllQuestions() {
    this.questionService.getQuestions(this.examId).subscribe({
      next: (questionData) => {
        this.questions = questionData;
        this.getCurrentQuestion();
        this.startQuestionTimer();
        this.questionWithSubmittedAnswers = this.questions.reduce((total: QuestionWithSubmittedAnswers[], question: Questions) => {
          const correctAnswer = question.Choices.find((choice: Choices) => choice.is_correct_option)?.choice;
          total.push({
            question: question.question,
            score: 0,
            correctAnswer
          });
          return total;
        }, []);
      }
    });
  }

  getCurrentQuestionTiming() {
    const timers = this.currentQuestion.timing.split(':');
    return parseInt(timers[0]) * 3600 + parseInt(timers[1]) * 60 + parseInt(timers[2]);
  }

  startQuestionTimer() {
    this.questionSubscriber = interval(1000)
      .pipe(take(this.currentQuestionTiming))
      .subscribe({
        next: (timing) => {
          this.questionTimer = this.currentQuestionTiming - timing;
        },
        error: () => {},
        complete: () => {
          this.currentQuestionIndex === this.questions.length - 1 ? this.submitExam() : this.next();
        }
      });
  }

  getCurrentQuestion() {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    !this.isShowAnswers ? (this.currentQuestionTiming = this.questionTimer = this.getCurrentQuestionTiming()) : null;
  }

  next() {
    this.currentQuestionIndex++;
    this.getCurrentQuestion();
    if (!this.isShowAnswers) {
      this.questionSubscriber.unsubscribe();
      this.startQuestionTimer();
    }
  }

  previous() {
    this.currentQuestionIndex--;
    this.getCurrentQuestion();
  }

  showAnswer() {
    this.isShowAnswers = true;
    this.currentQuestionIndex = 0;
    this.questions = this.questionWithSubmittedAnswers;
    this.getCurrentQuestion();
  }

  navigateIntialPage() {
    this.router.navigate(['app/user']);
  }

  canDeactivate(): boolean {
    if (!this.isSubmitted) {
      const canGo = confirm('Exam will submit. Are you want to leave');
      if (canGo) {
        this.submitExam();
      }
      return canGo;
    }
    return this.isSubmitted;
  }
}
