import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from "./guards/auth.guard";
import { MainPageGuard } from "./guards/main-page.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start-page',
    pathMatch: 'full'
  },
  {
    path: 'start-page',
    loadChildren: './modules/start-page/start-page.module#StartPageModule'
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'main-page',
    loadChildren: './modules/main-page/main-page.module#MainPageModule',
    canActivate: [MainPageGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
