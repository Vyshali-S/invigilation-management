import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LowGuard implements CanActivate {
  constructor(private authservice:AuthService){}

  canActivate() {
    return (this.authservice.isAuthenticated && this.authservice.isUser);
  }

}
