import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './shared/util/guards/login.guard';
import { authGuard } from './shared/util/guards/auth.guard';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'app/login',
    pathMatch : 'full',
  },
  {
    path : 'app/login',
    loadChildren: () => import('./authentication/login/login.module').then( mod => mod.LoginModule ),
    canActivate: [loginGuard],
  },
  {
    path : 'app/signup',
    loadChildren: () => import('./authentication/signup/signup.module').then( mod => mod.SignupModule ),
    canActivate: [loginGuard],
  },
  {
    path : 'app/user',
    loadChildren: () => import('./user-page/user-page.module').then( mod => mod.UserPageModule),
    canActivate: [authGuard],
  },
  {
    path : '**',
    loadChildren : () => import('./error-page/error-page.module').then( mod => mod.ErrorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
