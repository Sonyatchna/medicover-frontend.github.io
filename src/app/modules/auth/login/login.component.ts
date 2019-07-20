import { Component } from '@angular/core';
import { LoginFormBuilderService } from "../../../shared/formBuildersServices/login-form-builder.service";
import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import {AuthorizationService} from "../../../shared/services/authorization.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  showPassword = false;
  loginForm: FormGroup;

  constructor(
    private loginFormBuilder: LoginFormBuilderService,
    private notifier: NotifierService,
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
    this.loginForm = this.loginFormBuilder.getLoginForm();
  }

  login() {
    this.authorizationService.login(this.loginForm.value);
  }

  forgotPass() {
    this.notifier.notify('error', 'You forgot password!');
  }

}
