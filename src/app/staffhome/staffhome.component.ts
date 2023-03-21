import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { StaffService } from '../services/staff.service';
import { StaffhomeService } from '../services/staffhome.service';

@Component({
  selector: 'app-staffhome',
  templateUrl: './staffhome.component.html',
  styleUrls: ['./staffhome.component.css']
})
export class StaffhomeComponent {
  constructor(private _staffhomeservice: StaffhomeService,private _authservice:AuthService) {
    console.log("staffhome");
    this.retrive_staffdata();
  }
  staffDetails:any={};
  email:string='';
  duties:any=[]
  retrive_staffdata(){
    console.log(this._authservice.userInfo['email']);
    this._staffhomeservice.getStaffDetails(this._authservice.userInfo['email']).subscribe(
      (data)=>{console.log(data);
        this.staffDetails=data;
        console.log(this.staffDetails['upcoming_duties']);
        console.log(this.staffDetails['upcoming_duties'].replace("[",'').replace(']','').split(','));
        let temp=this.staffDetails['upcoming_duties'].replace("[",'').replace(']','').split(',');
        let res:any=[]
        temp.forEach((element:any) => {
          this.duties.push([element.split('.')])
          console.log(element.split('.'));
        });
        console.log("duties",this.duties[0][0][0]);

      }
    )
  }



}
