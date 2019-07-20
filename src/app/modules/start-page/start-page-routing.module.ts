import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page.component';
import { MainInfoComponent } from "./main-info/main-info.component";
import {DepartmentInfoComponent} from "./department-info/department-info.component";

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'main-info'
      },
      {
        path: 'main-info',
        component: MainInfoComponent
      },
      {
        path: 'department-info',
        component: DepartmentInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartPageRoutingModule { }
