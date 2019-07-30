import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CallNurseFormBuilderService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  getCallNurseForm() {
    return this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      secondName: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ])),
      phone: new FormControl('', Validators.compose([Validators.required])),
      arrivalDate: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required])),
      comment: new FormControl('', Validators.compose([Validators.required]))
    });
  }
}
