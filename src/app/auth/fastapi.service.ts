import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Event } from '../interfaces/event';
const url="http://127.0.0.1:8000/";

@Injectable({
  providedIn: 'root'
})
export class FastapiService {

  constructor(private http:HttpClient) { }

  logingoogle(tokeninfo:any){
    return this.http.post(url+'lg',tokeninfo);
  }
}
