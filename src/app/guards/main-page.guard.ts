import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from "../shared/services/authorization.service";
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class MainPageGuard implements CanActivate {

  constructor(
    private authorizationService: AuthorizationService,
    private location: Location
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authorizationService.$isAuthorized.value) {
      this.location.back();
      return false;
    }
    return true;
  }
}
