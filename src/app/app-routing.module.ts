import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdduserComponent } from "./adduser/adduser.component";
import { HighGuard } from "./auth/high.guard";
import { LoginComponent } from "./auth/login/login.component";
import { LowGuard } from "./auth/low.guard";
import { MidGuard } from "./auth/mid.guard";
import { EventreportComponent } from "./eventreport/eventreport.component";
import { EventsComponent } from "./events/events.component";
import { FulleventComponent } from "./fullevent/fullevent.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { StaffhomeComponent } from "./staffhome/staffhome.component";
import { StaffhomeModule } from "./staffhome/staffhome.module";
import { StaffreportComponent } from "./staffreport/staffreport.component";

const routes:Routes =[
  { path: '', component: LoginComponent },
  { path: 'events', component: EventsComponent,canActivate:[MidGuard] },
  { path: 'staffhome', component: StaffhomeComponent,canActivate:[LowGuard] },
  { path: 'edit/:id', component: FulleventComponent,canActivate:[MidGuard] },
  { path: 'adduser' , component:AdduserComponent,canActivate:[HighGuard]},
  { path: 'staffreport' , component:StaffreportComponent,canActivate:[MidGuard]},
  { path: 'eventreport/:id' , component:EventreportComponent,canActivate:[MidGuard]},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule{

}

/*
const routes:Routes =[
  { path: '', component: LoginComponent },
  { path: 'events', component: EventsComponent,canActivate:[AuthGuard] },
  { path: 'edit/:id', component: FulleventComponent,canActivate:[AuthGuard] },
  { path: 'adduser' , component:AdduserComponent,canActivate:[AuthGuard,AdminGuard]},
  { path: 'staffreport' , component:StaffreportComponent,canActivate:[AuthGuard,AdminGuard]},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule{

}

*/
