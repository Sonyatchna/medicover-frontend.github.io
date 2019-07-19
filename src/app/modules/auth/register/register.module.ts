import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ClientComponent } from './client/client.component';
import { MedicalStaffComponent } from './medical-staff/medical-staff.component';
import { RegisterComponent } from './register.component';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [
    ClientComponent,
    MedicalStaffComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxMaskModule
  ]
})

export class RegisterModule { }
