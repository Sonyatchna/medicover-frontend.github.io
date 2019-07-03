import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};

  constructor() {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
    };

    this.myParams = {
      particles: {
        number: {
          value: 60,
        },
        color: {
          value: '#43c9c6'
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: 10
        },
        speed: {
          value: 2
        },
        line_linked: {
          enable: true,
          distance: 300,
          color: '#2E8B57',
          opacity: 0.4,
          width: 2
        },
      }
    };
  }

  ngOnInit() {
  }

}
