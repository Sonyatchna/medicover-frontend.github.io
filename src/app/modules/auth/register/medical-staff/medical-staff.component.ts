import { Component } from '@angular/core';
import { RegisterFormBuilderService } from "../../../../shared/formBuildersServices/register-form-builder.service";
import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthorizationService } from "../../../../shared/services/authorization.service";

export interface Position {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-medical-staff',
  templateUrl: './medical-staff.component.html',
  styleUrls: ['./medical-staff.component.scss']
})

export class MedicalStaffComponent {

  positions: Position[] = [
    {value: 'worker-0', viewValue: 'Registry Worker'},
    {value: 'assistant-1', viewValue: 'Laboratory Assistant'},
    {value: 'nurse-2', viewValue: 'Nurse'}
  ];

  showPassword = false;
  registerMedicalStaffForm: FormGroup;

  constructor(
    private registerMedicalStaffFormBuilder: RegisterFormBuilderService,
    private notifier: NotifierService,
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
    this.registerMedicalStaffForm = this.registerMedicalStaffFormBuilder.getRegisterMedicalStaffForm();
  }

  registerMedicalStaff() {
    this.authorizationService.registerMedicalStaff(this.registerMedicalStaffForm.value);
  }
}
