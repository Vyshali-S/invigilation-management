import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StaffreportComponent } from '../staffreport/staffreport.component';
const url="http://127.0.0.1:8000/";


@Injectable({
  providedIn: 'root'
})
export class StaffService {


  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({Authorization:'Bearer '+localStorage.getItem('accesstoken')});

  getusers(date:string){
    return this.http.get(url+'staff/'+date,{headers:this.headers});
  }
}
