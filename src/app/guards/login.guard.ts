import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  constructor(
    private firebaseService : FirebaseService,
    private router : Router
  ){}

  canLoad(): boolean {
    if(!this.firebaseService.isLogin)
      return true;
    else{
      this.router.navigate(['/home']);
      return false;
    }
  }

}
