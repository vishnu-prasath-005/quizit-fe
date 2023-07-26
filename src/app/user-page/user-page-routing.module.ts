import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      {
        path: 'exam',
        loadChildren: () => import('./exam/exam.module').then((mod) => mod.ExamModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./report/report.module').then((mod) => mod.ReportModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserPageRoutingModule {}
