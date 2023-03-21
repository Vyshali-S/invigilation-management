import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-eventreport',
  templateUrl: './eventreport.component.html',
  styleUrls: ['./eventreport.component.css']
})
export class EventreportComponent {
  constructor(private activatedRouter:ActivatedRoute,private eventService:EventsService){}
  id:number=0;
  event:any={};
  docDefinition:any={

  };
  table:any=[];
  retriveData(){
    this.id=Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.eventService.getEvent(this.id).subscribe((data) =>{

      this.event=data;
      this.event.date=data.date.split(" ")[0];
      this.event.classrooms=JSON.parse(this.event.classrooms);
      console.log(data);
      for (let i = 0; i < this.event.classrooms.length; i++) {
        this.table.push([i+1,this.event.classrooms[i],JSON.parse(this.event.staffs)[i][1] , JSON.parse(this.event.staffs)[i][0]]);
      };
      console.log(this.table);
    });
  }
  ngOnInit(){
    this.retriveData();
    console.log(this.event.date)

  }
}
