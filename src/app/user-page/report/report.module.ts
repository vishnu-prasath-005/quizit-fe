import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatTableModule,
    MatExpansionModule
  ]
})
export class ReportModule { }
