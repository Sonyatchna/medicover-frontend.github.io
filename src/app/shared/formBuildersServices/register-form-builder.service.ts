import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RegisterFormBuilderService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  getRegisterClientForm() {
    return this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      secondName: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
      phone: new FormControl('', Validators.compose([Validators.required])),
      birthDate: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)]))
    });
  }

  getRegisterMedicalStaffForm() {
    return this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      secondName: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
      phone: new FormControl('', Validators.compose([Validators.required])),
      position: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)]))
    });
  }
}
