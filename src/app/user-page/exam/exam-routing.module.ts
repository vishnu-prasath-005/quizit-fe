import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam.component';

const routes: Routes = [
  {
    path: '',
    component: ExamComponent,
  },
  {
    path: 'instruction',
    loadChildren: () =>
      import('./instruction/instruction.module').then(
        (mod) => mod.InstructionModule
      ),
  },
  {
    path : 'question',
    loadChildren : ()=> import('./question/question.module').then( mod => mod.QuestionModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamRoutingModule {}
