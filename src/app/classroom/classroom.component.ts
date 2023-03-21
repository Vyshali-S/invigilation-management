import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { timestamp } from 'rxjs';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit,OnChanges {
  constructor(private eventService:EventsService){}

  @Input() required_count:any=0 ; /** Input from parent component */
  classrooms!:any[] ;
  isMasterSel!:any[] ;
  total_count:any=0;
  selected_count:any=this.total_count;
  block_count=[0,0,0]
  block_names:any=[];

  @Output() emitClassroomList = new EventEmitter<any[]>();/** EventEmitter -> angular core \ Event-> interface \ eventEmitter-> var to catch in parent html*/

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    console.log(this.required_count);
    console.log(this.selected_count,Number(this.required_count),this.selected_count<=this.required_count);
    if(!(this.selected_count<=Number(this.required_count))){
      this.emitClassList();
    }
  }
  ngOnInit(){
    this.loadAllClassrooms();
  }

  loadAllClassrooms() {
    this.eventService.getClassrooms().subscribe((data) => {
      console.log(data[1]);
      this.block_names=data[1];

      this.total_count=data[0].length;
      console.log("classroom.component :",data[0].length);
      this.isMasterSel = data[1].map((d: any) => {
        return {
          block: d, isSelected: false
        }
      })
      this.classrooms = data[0].map((d: any) => {
        return {
          classroom: d.room_no,
          block: d.block,
          isSelected: false
        }
      })
      console.log(this.classrooms);
    });
  }

  masterchange(block: any) {
    this.isMasterSel.forEach((master) => {

      if (block == master.block ) {
        if(master.isSelected){
          this.classrooms.forEach((element) => {
            if (element.block == block) {
              element.isSelected = true;
            }
          });
        }
        else if(!master.isSelected){
          this.classrooms.forEach((element) => {
            if (element.block == block) {
              element.isSelected = false;
            }
          });
        }

      }
    })
    console.log(this.classrooms);
    this.emitClassList();
  }
  handle(block:any) {
    this.isMasterSel.forEach((master)=>{
      if(block==master.block){
        master.isSelected=false;
      }
    })
    this.emitClassList();
  }
  emitClassList(){
    let classList:String[]=[];
    this.classrooms.forEach((element)=>{
      if(element.isSelected){
        classList.push(element.classroom)
        this.selected_count+=1;
        if(element.block == "AS 1"){
          this.block_count[0]+=1;
        }
        if(element.block == "AS 2"){
          this.block_count[1]+=1;
        }
        if(element.block == "AS 3"){
          this.block_count[2]+=1;
        }
      }
    })
    this.selected_count=classList.length;
    console.log(classList);
    this.emitClassroomList.emit([classList,this.total_count,this.selected_count,[this.block_names,this.block_count]]);
    this.block_count=[0,0,0];
  }

}
