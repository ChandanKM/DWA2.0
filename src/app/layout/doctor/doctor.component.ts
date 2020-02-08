import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../api/api';
import { DtoDoctor } from '../../model/models';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent implements OnInit
{
    services :DoctorService;
    submitted = false;
    model: any = {};
    //initalize the services.
    constructor(_services:DoctorService) {
      this.services = _services;
     }

  ngOnInit() {
    
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
