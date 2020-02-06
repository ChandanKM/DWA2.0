import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '', component: DoctorComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorRoutingModule { }
