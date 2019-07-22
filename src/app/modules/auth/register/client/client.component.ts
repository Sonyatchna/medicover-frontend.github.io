import { Component } from '@angular/core';
import { RegisterFormBuilderService } from "../../../../shared/formBuildersServices/register-form-builder.service";
import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthorizationService } from "../../../../shared/services/authorization.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})

export class ClientComponent {

  showPassword = false;
  registerClientForm: FormGroup;
  minDate = new Date(1910, 0, 1);
  maxDate = new Date();

  constructor(
    private registerClientFormBuilder: RegisterFormBuilderService,
    private notifier: NotifierService,
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
    this.registerClientForm = this.registerClientFormBuilder.getRegisterClientForm();
  }

  registerClient() {
    this.authorizationService.registerClient(this.registerClientForm.value);
  }

}
