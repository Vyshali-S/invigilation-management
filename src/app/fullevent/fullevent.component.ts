import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EventsService } from '../services/events.service';
import { Event } from '../interfaces/event';
import html2canvas from 'html2canvas';
import autoTable from 'jspdf-autotable'



import { jsPDF } from "jspdf";

@Component({
  selector: 'app-fullevent',
  templateUrl: './fullevent.component.html',
  styleUrls: ['./fullevent.component.css']
})
export class FulleventComponent implements OnInit{
  constructor(private activatedRouter:ActivatedRoute,private eventService:EventsService,private ref: ChangeDetectorRef){}
  id:number=0;
  event:any={};
  docDefinition:any={

  };
  update_message:string='';
  table:any=[];
  retriveData(){
    this.id=Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.eventService.getEvent(this.id).subscribe((data) =>{

      this.event=data;
      this.event.date=data.date.split(" ")[0];
      console.log(data);
      this.ref.detectChanges();
      for (let i = 0; i < JSON.parse(this.event.classrooms).length; i++) {
        this.table.push([i+1,JSON.parse(this.event.classrooms)[i],JSON.parse(this.event.staffs)[i][1] , JSON.parse(this.event.staffs)[i][0]]);
      };
      console.log(this.table);
    });
  }
  ngOnInit(){
    this.retriveData();
    console.log(this.event.date)

  }

  downloadpdf(){
    const doc = new jsPDF();

    autoTable(doc, {
      head: [['Id', 'Classrooms', 'Email',"Name"]],
      body: this.table ,
    });


    doc.save(this.event.date+"-"+this.event.session+".pdf");
  }
  isLoading(){
    return this.eventService.isLoading;
  }
  updateEvent(){
    this.eventService.updateEvent(this.id,this.event).subscribe(
      (data)=>{console.log(data);
        this.retriveData();
      },
      (error)=>{
        this.update_message="Error Updating"

      },
      ()=>{
        this.update_message="Updated Successfully"
        console.log("don succ")
      }
    )

  }
  deleteEvent(){
    console.log('deleted');
  }

}
