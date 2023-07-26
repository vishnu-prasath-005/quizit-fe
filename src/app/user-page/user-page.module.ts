import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserPageRoutingModule } from './user-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [UserPageComponent],
  imports: [CommonModule,
    UserPageRoutingModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class UserPageModule {}
