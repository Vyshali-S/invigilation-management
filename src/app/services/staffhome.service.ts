import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const url="http://127.0.0.1:8000/";

@Injectable({
  providedIn: 'root'
})
export class StaffhomeService {


  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({Authorization:'Bearer '+localStorage.getItem('accesstoken')});

  getStaffDetails(email:any){
    return this.http.get(url+'staffhome/'+email,{headers:this.headers});
  }
}
