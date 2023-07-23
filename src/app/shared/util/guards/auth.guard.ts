import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthApiService } from 'src/app/service/auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private authApiService: AuthApiService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authApiService.checkToken().pipe(
      map((data) => {
        if (data.valid) {
          return true;
        }
        this.router.navigate(['/app/login']);
        return false;
      }),
      catchError((err) => {
        this.router.navigate(['/app/login']);
        return of(false);
      })
    );
  }
}
