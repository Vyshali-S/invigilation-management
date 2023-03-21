import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdduserComponent,UserComponent],
  imports: [
    CommonModule,FormsModule
  ],
exports:[AdduserComponent]
})
export class AdduserModule {

}
