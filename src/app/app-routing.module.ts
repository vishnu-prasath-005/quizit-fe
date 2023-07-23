import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './shared/util/guards/login.guard';
import { AuthGuard } from './shared/util/guards/auth.guard';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'app/login',
    pathMatch : 'full',
  },
  {
    path : 'app/login',
    loadChildren: () => import('./authentication/login/login.module').then( mod => mod.LoginModule ),
    canActivate: [LoginGuard],
  },
  {
    path : 'app/signup',
    loadChildren: () => import('./authentication/signup/signup.module').then( mod => mod.SignupModule ),
    canActivate: [LoginGuard],
  },
  {
    path : 'app/user',
    loadChildren: () => import('./user-page/user-page.module').then( mod => mod.UserPageModule),
    canActivate: [AuthGuard],
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
