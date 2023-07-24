import { inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ExamService } from 'src/app/service/exam.service';

export const questionGuard: CanActivateFn = (route, state) =>  {
  const examService = inject(ExamService);
  const router = inject(Router);
  const routes = inject(ActivatedRoute);
  return examService.isExamStarted.pipe(
    map((data) => {
      if (data) {
        return true;
      }
      router.navigate([],{ relativeTo: routes })
      return false;
    })
  );
};
