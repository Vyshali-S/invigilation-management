import { Component, EventEmitter, Input, OnDestroy, OnInit, Output,ChangeDetectorRef } from '@angular/core';
import { Event } from '../../interfaces/event';
import {Router} from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit,OnDestroy {
  constructor(private router:Router,private eventService:EventsService){

  }
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
  }
  @Input() event:any ; /** Input from parent component */
  @Output() eventEmitter = new EventEmitter<any>();/** EventEmitter -> angular core \ Event-> interface \ eventEmitter-> var to catch in parent html*/

  goToEdit(id:number){
    this.router.navigateByUrl('edit/'+id);
  }
  goToReport(id:number){
    this.router.navigateByUrl('eventreport/'+id);
  }
  deleteEvent(id:number){
    this.eventEmitter.emit(this.event.id);

  }


}
