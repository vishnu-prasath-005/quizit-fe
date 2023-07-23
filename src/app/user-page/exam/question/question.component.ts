import { Component, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  examId: string = this.route.snapshot.queryParams['examId'];
  examScore: number = 0;
  questions: any[] = [];
  questionWithSubmittedAnswers: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}
  ngOnInit() {
    this.questionService.getQuestions(this.examId).subscribe({
      next: (data) => {
        this.questions = data;
        this.questionWithSubmittedAnswers = this.questions.map
          (questions => {
            return { question: questions.question, score: 0 };
          }
        );
      },
    });
  }

  checkAnswer(event: any, question: string) {
    if (event.value.is_correct_option) {
      this.questionWithSubmittedAnswers.find(
        (questions) => questions.question === question
      ).score = 1;
    } else {
      this.questionWithSubmittedAnswers.find(
        (questions) => questions.question === question
      ).score = 0;
    }
  }

  submitExam() {
    this.examScore = this.questionWithSubmittedAnswers.reduce(
      (total, questions) => total + questions.score,
      0
    );
    console.log(this.examScore)
  }
}
