import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question.component';
import { questionDeactivateGuard } from 'src/app/shared/util/guards/question-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: QuestionComponent,
    canDeactivate: [questionDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule {}
