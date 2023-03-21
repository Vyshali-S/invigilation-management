import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

const url="http://127.0.0.1:8000/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({Authorization:'Bearer '+localStorage.getItem('accesstoken')});

  getusers(){
    return this.http.get(url+'user/all',{headers:this.headers});
  }
  adduser(user:User){
    return this.http.post(url+'user/add',user,{headers:this.headers});
  }
  deleteuser(email:String){
    return this.http.delete(url+'user/delete/'+email,{headers:this.headers});
  }
}
