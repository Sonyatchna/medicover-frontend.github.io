import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  unsubscribe: Subscription[] = [];

  navLinks: any[] = [{
      label: 'CLIENT',
      link: 'client',
      index: 0
    },
    {
      label: 'MEDICAL STAFF',
      link: 'medical-staff',
      index: 1
    }
  ];
  activeLinkIndex = -1;

  constructor(
    private router: Router
  ) {
    this.unsubscribe.push(this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => this.router.url.includes(tab.link)));
    }));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(e => e.unsubscribe());
  }

}
