import { Component, OnInit } from '@angular/core';
import { departments } from '../../../shared/constants/start-page/departments';
declare let L;

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.scss']
})
export class DepartmentInfoComponent implements OnInit {

  departments = departments;
  map;

  constructor() {
  }

  ngOnInit() {
    this.map = L.map('map').setView([49.842957, 24.031111], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    const mapMarkers = departments.map(el => el.latLng);

    mapMarkers.forEach(marker => {
      L.marker(marker).addTo(this.map);
    });

  }

}
