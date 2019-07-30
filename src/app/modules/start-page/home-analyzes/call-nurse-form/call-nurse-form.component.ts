import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { CallNurseFormBuilderService } from "../../../../shared/formBuildersServices/call-nurse-form-builder.service";
import { CallNurseService } from "../../../../shared/services/call-nurse.service";

@Component({
  selector: 'app-call-nurse-form',
  templateUrl: './call-nurse-form.component.html',
  styleUrls: ['./call-nurse-form.component.scss']
})
export class CallNurseFormComponent {

  callNurseForm: FormGroup;
  minDate = new Date();
  maxDate;

  constructor(
    private callNurseFormBuilder: CallNurseFormBuilderService,
    private callNurseService: CallNurseService
  ) {
    this.callNurseForm = this.callNurseFormBuilder.getCallNurseForm();
  }

  callNurse() {
    this.callNurseService.callNurse(this.callNurseForm.value);
  }

}
