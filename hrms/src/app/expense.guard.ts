import { Injectable } from '@angular/core';
 import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
   providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router,) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;
      

          return this.checkLogin(url);
      }

      checkLogin(url: string): true | UrlTree {
         console.log("Url: " + url)
         let val: string = localStorage.getItem('isUserLoggedIn');
         console.log("value",val)

         if(val != null && val == "true"){
            if(url == "/login"){
               // location.reload() ;
               this.router.parseUrl('/show');
               // location.reload() ;

            }
            else { 
               // location.reload() ;
               return true;}
            
         } else {
            // location.reload() ;
            return this.router.parseUrl('/login');
         }
         
      }


}
