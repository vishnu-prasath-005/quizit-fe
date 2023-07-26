import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthApiService } from 'src/app/service/auth-api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authApiService = inject(AuthApiService);
  return authApiService.checkToken().pipe(
    map((loginData) => {
      if(!loginData.valid){ 
        router.navigate(['/app/login']);
      }
      return loginData.valid;
    }),
    catchError(() => {
      router.navigate(['/app/login']);
      return of(false);
    })
  );
};
