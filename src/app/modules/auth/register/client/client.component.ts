import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { RegisterFormBuilderService } from "../../../../shared/formBuildersServices/register-form-builder.service";
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
    private authorizationService: AuthorizationService
  ) {
    this.registerClientForm = this.registerClientFormBuilder.getRegisterClientForm();
  }

  registerClient() {
    this.authorizationService.registerClient(this.registerClientForm.value);
  }

}
