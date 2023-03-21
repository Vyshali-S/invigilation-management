import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-staffreport',
  templateUrl: './staffreport.component.html',
  styleUrls: ['./staffreport.component.css']
})
export class StaffreportComponent implements OnInit  {
  constructor(private staffservice:StaffService){}
  report:any={
    data:[],
    date:'',
    id:0
  };
  temp:any;
  date=(new Date).toISOString().split('T')[0];
  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    console.log('here',)
    console.log(typeof this.report.data)
    this.staffservice.getusers(this.date).subscribe((data) => {
      console.log(data)
      if (data!='null'){
        let ss=JSON.parse(JSON.stringify(data));
        console.log(ss['data']);
        console.log(typeof ss['data'].split(","));
        this.report={
          id:ss['id'],
          date:ss['date'],
          data:ss['data'].split(","),
        }
      }
      else{
        this.report.data=[]
      }


       });
  }
  fetch(){
this.retriveData();
  }


}
