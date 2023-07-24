import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ExamComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    MatCardModule
  ]
})
export class ExamModule { }
