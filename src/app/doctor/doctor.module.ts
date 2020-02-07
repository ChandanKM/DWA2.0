import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './/doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DoctorRoutingModule,
    NgbModule
  ],
  exports: [DoctorComponent],
  declarations: [DoctorComponent],
  bootstrap: [DoctorComponent]
})
export class DoctorModule { }
