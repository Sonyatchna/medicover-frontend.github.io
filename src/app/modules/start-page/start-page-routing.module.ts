import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page.component';
import { MainInfoComponent } from "./main-info/main-info.component";
import { DepartmentInfoComponent } from "./department-info/department-info.component";
import { DiscountInfoComponent } from "./discount-info/discount-info.component";
import { PreparationInfoComponent } from "./preparation-info/preparation-info.component";
import { HomeAnalyzesComponent } from "./home-analyzes/home-analyzes.component";

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
      },
      {
        path: 'discount-info',
        component: DiscountInfoComponent
      },
      {
        path: 'preparation-info',
        component: PreparationInfoComponent
      },
      {
        path: 'home-analyzes',
        component: HomeAnalyzesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartPageRoutingModule { }
