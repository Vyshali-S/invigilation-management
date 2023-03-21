import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffreportComponent } from './staffreport.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [StaffreportComponent],
  imports: [
    CommonModule,FormsModule,BrowserModule
  ],
  exports:[StaffreportComponent]
})
export class StaffreportModule { }


