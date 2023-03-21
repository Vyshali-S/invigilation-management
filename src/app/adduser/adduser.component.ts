import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  constructor(private userservice: UserService, private ref: ChangeDetectorRef) { }
  users!: any;
  newUser: User = {
    email: '',
    privilege: 'User'
  }

  ngOnInit(): void {
    this.loadAll();

  }

  loadAll(){
    this.userservice.getusers().subscribe({
      next: (data)=>{
        this.users=data;
        console.log(this.users)
      },
      error(err) {

      },
      complete() {

      },
    })
    this.ref.detectChanges();

  }

  addUser() {
    this.users.push(this.newUser);
    console.log(this.newUser)
    this.userservice.adduser(this.newUser).subscribe(
      (data) => { console.log(data) },
      (error) => { console.log(error) }
    )
  }


  deleteUser(email: String) {
    console.log(email);
    this.userservice.deleteuser(email).subscribe(
      (data) => { console.log(data);    this.loadAll();
      }
    );
  }

}
