import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NotifierService} from "angular-notifier";
import {url, httpOptions} from '../configs/config';
import {Router} from "@angular/router";
import {localStorageItems} from "../constants/local-storage-items";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public $userRole: BehaviorSubject<string> = new BehaviorSubject(null);
  public $userToken: BehaviorSubject<string> = new BehaviorSubject(null);
  public $userInfo: BehaviorSubject<string> = new BehaviorSubject(null);
  public $isAuthorized: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private notifier: NotifierService,
    private router: Router
  ) {
    this.setFieldFromLocalStorage(this.$userRole, localStorageItems.userRole);
    this.setFieldFromLocalStorage(this.$userToken, localStorageItems.token);
    this.setFieldFromLocalStorage(this.$userInfo, localStorageItems.userInfo);
    this.setFieldFromLocalStorage(this.$isAuthorized, localStorageItems.isAuthorized);
  }

  private setFieldFromLocalStorage(subject, fieldName) {
    const field = localStorage.getItem(fieldName);
    if (field) {
      subject.next(field);
    }
  }

  public login(body) {
    this.http.post(`${url}/auth/login`, body, httpOptions).subscribe((res: any) => {
        localStorage.setItem(localStorageItems.token, res.token);
        this.$userToken.next(res.token);

        localStorage.setItem(localStorageItems.userRole, res.findPerson.type);
        this.$userRole.next(res.findPerson.type);

        localStorage.setItem(localStorageItems.userInfo, JSON.stringify(res.findPerson));
        this.$userInfo.next(res.findPerson);

        localStorage.setItem(localStorageItems.isAuthorized, 'true');
        this.$isAuthorized.next(true);

        this.router.navigate(['/main-page']);
        this.notifier.notify('success', res.message);
      },
      err => this.notifier.notify('error', err)
    );
  }

  public registerClient(body) {
    this.http.post(`${url}/auth/register/client`, body, httpOptions).subscribe((res: any) => {
        this.router.navigate(['/auth/login']);
        this.notifier.notify('success', res.message);
      },
      err => this.notifier.notify('error', err)
    );
  }

  public registerMedicalStaff(body) {
    this.http.post(`${url}/auth/register/medical-staff`, body, httpOptions).subscribe((res: any) => {
        this.router.navigate(['/auth/login']);
        this.notifier.notify('success', res.message);
      },
      err => this.notifier.notify('error', err)
    );
  }
}
