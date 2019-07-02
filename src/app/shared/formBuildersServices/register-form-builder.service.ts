import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RegisterFormBuilderService {

  constructor(
    private formBuilder: FormBuilder
  ) { }


}
