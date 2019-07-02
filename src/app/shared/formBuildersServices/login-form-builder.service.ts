import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LoginFormBuilderService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  getLoginForm() {
    return this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)]))
    });
  }
}
