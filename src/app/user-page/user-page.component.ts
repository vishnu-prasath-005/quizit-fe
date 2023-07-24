import { Component } from "@angular/core";
import { ExamService } from "../service/exam.service";

@Component({
  selector: 'app-signup',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  isExamStarted : boolean ;
  constructor(
    private examService : ExamService
  ){
    this.examService.isExamStarted.subscribe({
      next : data =>  this.isExamStarted = data
    })
  }
}