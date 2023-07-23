import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of } from "rxjs";
import { AuthApiService } from "src/app/service/auth-api.service";


@Injectable({
    providedIn : 'root'
})
export class LoginGuard implements CanActivate {
    constructor(
       private router : Router,
       private authApiService : AuthApiService
    ){}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
           return this.authApiService.checkToken().pipe(
                map(data => {
                    console.log(data.valid)
                    if(!data.valid){
                        return true;
                    }
                    else {
                        this.router.navigate(['app/user']);
                        return false
                    }
                }),
                catchError(err => {
                    return of(true)
                })
            )
    }
} 