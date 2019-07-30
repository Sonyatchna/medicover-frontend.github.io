import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { CallNurseFormBuilderService } from "../../../../shared/formBuildersServices/call-nurse-form-builder.service";
import { CallNurseService } from "../../../../shared/services/call-nurse.service";
import * as moment from 'moment';
import { NotifierService } from 'angular-notifier';
import {AuthorizationService} from '../../../../shared/services/authorization.service';
import {notificationMessages} from '../../../../shared/constants/notification-messages';

@Component({
  selector: 'app-call-nurse-form',
  templateUrl: './call-nurse-form.component.html',
  styleUrls: ['./call-nurse-form.component.scss']
})
export class CallNurseFormComponent {

  callNurseForm: FormGroup;
  minDate = moment().format();
  maxDate = new Date(moment().add('month', 1).format());

  constructor(
    private callNurseFormBuilder: CallNurseFormBuilderService,
    private callNurseService: CallNurseService,
    private notifierService: NotifierService,
    private authorizationService: AuthorizationService
  ) {
    this.callNurseForm = this.callNurseFormBuilder.getCallNurseForm();
  }

  callNurse() {
    if (this.authorizationService.$isAuthorized.value) {
      this.callNurseService.callNurse(this.callNurseForm.value)
        .subscribe(res => console.log(res));
      this.notifierService.notify('success', notificationMessages.callNurseSuccess);
    } else {
      this.notifierService.notify('warning', notificationMessages.callNurseWarning);
    }
  }

}
