import { Component } from '@angular/core';
import { RegisterFormBuilderService } from "../../../../shared/formBuildersServices/register-form-builder.service";
import { FormGroup } from "@angular/forms";
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

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
    private registerService: RegisterService
  ) {
    this.registerClientForm = this.registerClientFormBuilder.getRegisterClientForm();
  }

  registerClient() {
    console.log(this.registerClientForm.value);
    this.registerService.registerClient(this.registerClientForm.value)
      .subscribe(({ message }) => {
          this.router.navigate(['/login']);
          this.notifier.notify('success', message);
        },
        err =>
          this.notifier.notify('error', err)
      );
  }

}
