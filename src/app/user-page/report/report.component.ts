import { Component } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { UserReports } from 'src/app/shared/util/interfaces';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  userId: string = JSON.parse(localStorage.getItem('user') as string).user_id;
  displayedColumns: string[] = ['Attempts','Obtained Marks', 'Verdict'];
  userReports: UserReports[] = [];

  constructor(private reportservice: ReportService) {}
  
  ngOnInit() {
    this.getUserReport();
  }

  getUserReport() {
    this.reportservice.getReportByUserId(this.userId).subscribe({
      next: (reportData ) => {
        this.userReports = reportData as UserReports[] ;
      }
    });
  }
}
