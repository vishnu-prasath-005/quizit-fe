import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/service/exam.service';


@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent {
  examId : string = this.route.snapshot.queryParams['examId']
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private examService : ExamService
  ){} 
  startExam(){
      this.router.navigate(['app/user/exam/question'], { queryParams: { examId: this.examId } })
  }
}
