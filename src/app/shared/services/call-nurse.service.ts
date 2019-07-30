import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { localStorageItems } from "../constants/local-storage-items";

@Injectable({
  providedIn: 'root'
})
export class CallNurseService {

  public $isAuthorized: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.setFieldFromLocalStorage(this.$isAuthorized, localStorageItems.isAuthorized);
  }

  private setFieldFromLocalStorage(subject, fieldName) {
    const field = localStorage.getItem(fieldName);
    if (field) {
      subject.next(field);
    }
  }

  public callNurse(body) {

  }
}
