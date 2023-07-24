import { Component } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  userId : string = JSON.parse(localStorage.getItem('user') as string).user_id;
  displayedColumns: string[] = ['Obtained Marks', 'Verdict'];
  userReports : any = []
  constructor(
    private reportservice : ReportService
  ){}
  ngOnInit(){
   this.getUserReport()
  }

  getUserReport(){
    this.reportservice.getReportByUserId(this.userId).subscribe({
      next : data => {
        this.userReports = data;
        console.log(this.userReports)
      }
    })
  }
}
