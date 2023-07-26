import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
     SignupRoutingModule, 
     MatFormFieldModule, 
     FormsModule, 
     ReactiveFormsModule, 
     MatInputModule,
     MatButtonModule
    ]
})
export class SignupModule {}
