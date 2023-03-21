import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HighGuard implements CanActivate {
  constructor(private authservice:AuthService){}

  canActivate() {
    return (this.authservice.isAuthenticated && this.authservice.isAdmin);
  }

}
