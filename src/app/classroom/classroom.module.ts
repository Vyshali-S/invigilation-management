import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassroomComponent } from './classroom.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [ClassroomComponent],
  imports: [
    CommonModule,FormsModule,MatCheckboxModule
  ],
  exports:[ClassroomComponent]
})
export class ClassroomModule { }
