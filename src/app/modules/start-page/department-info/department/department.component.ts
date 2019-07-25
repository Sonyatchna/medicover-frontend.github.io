import {Component, Input, OnInit} from '@angular/core';
import {Department} from "../../../../shared/interfaces/start-page/department";
declare let L;

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  @Input() department: Department;
  @Input() map;
  @Input() mapDiv: HTMLDivElement;

  constructor() { }

  ngOnInit() {
  }

  setMapView(coordinates) {
    this.map.flyTo(coordinates, 14);
    this.mapDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
