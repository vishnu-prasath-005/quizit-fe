import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';


@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    MatRadioModule
  ]
})
export class QuestionModule { }
