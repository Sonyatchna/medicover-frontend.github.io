import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../configs/config';

@Injectable({
  providedIn: 'root'
})
export class CallNurseService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public callNurse(body) {
    return this.httpClient.post(`${url}/client/call-nurse`, body);
  }
}
