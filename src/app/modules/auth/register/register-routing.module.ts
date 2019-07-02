import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { MedicalStaffComponent } from './medical-staff/medical-staff.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full'
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'medical-staff',
        component: MedicalStaffComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
