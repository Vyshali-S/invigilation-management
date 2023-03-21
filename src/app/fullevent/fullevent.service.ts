import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/events.service';

@Injectable({
  providedIn: 'root'
})
export class FulleventService implements OnInit {
  id!:number;
  event:any={};
  constructor(private activatedRouter:ActivatedRoute,private eventService:EventsService) { }
  ngOnInit(): void {
    this.retriveData()
    console.log(this.event.id)
  }
  retriveData(){
    this.id=Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.eventService.getEvent(this.id).subscribe((data) =>{
      this.event=data;
      console.log(data);
    });
  }

  updateEvent(event:any){
    this.eventService.updateEvent(this.id,event).subscribe(
      (data)=>{console.log(data);this.retriveData()}
    )

  }
}
