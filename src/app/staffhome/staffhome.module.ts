import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffhomeComponent } from './staffhome.component';



@NgModule({
  declarations: [StaffhomeComponent],
  imports: [
    CommonModule
  ],
  exports:[StaffhomeComponent]
})
export class StaffhomeModule { }
