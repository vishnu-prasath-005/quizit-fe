import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthApiService } from 'src/app/service/auth-api.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authApiService = inject(AuthApiService);
  return authApiService.checkToken().pipe(
    map((data) => {
      if (!data.valid) {
        return true;
      } else {
        router.navigate(['app/user']);
        return false;
      }
    }),
    catchError((err) => {
      return of(true);
    })
  );
};
