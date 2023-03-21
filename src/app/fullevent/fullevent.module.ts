import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FulleventComponent } from './fullevent.component';
import { EventsService } from '../services/events.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FulleventComponent],
  providers:[EventsService],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[FulleventComponent],/** sending EventsComponent to app.module for use in app-events in app.html */
})
export class FullEventsModule {}
