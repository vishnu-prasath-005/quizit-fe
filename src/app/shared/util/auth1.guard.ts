import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const auth1Guard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // router.navigateByUrl('')
  return true;
};
