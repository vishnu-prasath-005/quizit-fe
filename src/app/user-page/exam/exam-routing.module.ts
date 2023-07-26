import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam.component';
import { questionGuard } from 'src/app/shared/util/guards/question.guard';

const routes: Routes = [
  {
    path: '',
    component: ExamComponent
  },
  {
    path: 'instruction',
    loadChildren: () => import('./instruction/instruction.module').then((mod) => mod.InstructionModule),
    canActivate: [questionGuard],
  },
  {
    path: 'question',
    loadChildren: () => import('./question/question.module').then((mod) => mod.QuestionModule),
    canActivate: [questionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExamRoutingModule {}
