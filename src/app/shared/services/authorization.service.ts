import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NotifierService} from "angular-notifier";
import { url, httpOptions } from '../configs/config';
import {Router} from "@angular/router";
import {localStorageItems} from "../constants/local-storage-items";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public $userRole: BehaviorSubject<string> = new BehaviorSubject(null);
  public $userToken: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private notifier: NotifierService,
    private router: Router
  ) {
    this.setFieldFromLocalStorage(this.$userRole, localStorageItems.userRole);
    this.setFieldFromLocalStorage(this.$userToken, localStorageItems.token);
  }

  private setFieldFromLocalStorage(subject, fieldName) {
    const field = localStorage.getItem(fieldName);
    if (field) {
      subject.next(field);
    }
  }

  public login(body) {
    this.http.post(`${url}/auth/login`, body, httpOptions).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.$userToken.next(res.token);
      localStorage.setItem('user-role', res.findPerson.type);
      this.$userRole.next(res.findPerson.type);

      this.router.navigate(['/main-page']);
      this.notifier.notify('success', res.message);
    },
      err => this.notifier.notify('error', err)
    );
  }

  public registerClient() {

  }

  public registerMedicalStaff() {

  }

}
