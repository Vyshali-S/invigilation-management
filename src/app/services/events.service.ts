import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Event } from '../interfaces/event';
import { AuthService } from '../auth/auth.service';
const url="http://127.0.0.1:8000/event/";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http:HttpClient,private authService:AuthService) { }

  isLoading:boolean=false;
  headers = new HttpHeaders({Authorization:'Bearer '+localStorage.getItem('accesstoken')});

  addEvents(event:Event){
    return this.http.post(url+'add',event,{headers:this.headers});
  }
  getEvents(){
    return this.http.get<any[]>(url,{headers:this.headers});
  }
  getEvent(id:number){
    return this.http.get<any>(url+id,{headers:this.headers});
  }

  updateEvent(id:number,event:Event){
    return this.http.put(url+'update/'+id,event,{headers:this.headers});
  }

  deleteEvent(id:number){
    return this.http.delete(url+'delete/'+id,{headers:this.headers});
  }

  getClassrooms(){
    return this.http.get<any[]>(url+'classrooms/',{headers:this.headers});
  }

}
