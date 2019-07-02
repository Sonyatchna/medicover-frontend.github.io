import { Component, OnInit } from '@angular/core';

export interface Position {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-medical-staff',
  templateUrl: './medical-staff.component.html',
  styleUrls: ['./medical-staff.component.scss']
})

export class MedicalStaffComponent implements OnInit {

  positions: Position[] = [
    {value: 'worker-0', viewValue: 'Registry Worker'},
    {value: 'assistant-1', viewValue: 'Laboratory Assistant'},
    {value: 'nurse-2', viewValue: 'Nurse'}
  ];

  showPassword = false;

  constructor() { }

  ngOnInit() {
  }

}
