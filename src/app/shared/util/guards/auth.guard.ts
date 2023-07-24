import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthApiService } from 'src/app/service/auth-api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authApiService = inject(AuthApiService)
  return authApiService.checkToken().pipe(
    map((data) => {
      if (data.valid) {
        return true;
      }
      router.navigate(['/app/login']);
      return false;
    }),
    catchError((err) => {
      router.navigate(['/app/login']);
      return of(false);
    })
  );
}

