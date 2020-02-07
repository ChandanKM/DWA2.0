import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './/doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DoctorRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DoctorComponent],
  declarations: [DoctorComponent],
  bootstrap: [DoctorComponent]
})
export class DoctorModule { }
