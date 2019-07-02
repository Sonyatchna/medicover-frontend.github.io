import { Component } from '@angular/core';
import { LoginFormBuilderService } from "../../../shared/formBuildersServices/login-form-builder.service";
import { FormGroup } from "@angular/forms";
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

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
    private loginService: LoginService
  ) {
    this.loginForm = this.loginFormBuilder.getLoginForm();
  }

  login() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value)
      .subscribe(({ token, message }) => {
        console.log(`login token received : ${token}`);
        localStorage.setItem('token', token);
        this.router.navigate(['']);
        this.notifier.notify('success', message);
      },
        err =>
          this.notifier.notify('error', err)
      );
  }
}
