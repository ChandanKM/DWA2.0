import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './/doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorService } from '../api/api';
import { StatModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    DoctorRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StatModule
  ],
  exports: [DoctorComponent],
  declarations: [DoctorComponent],
  providers: [DoctorService],
  bootstrap: [DoctorComponent]
})
export class DoctorModule { }
