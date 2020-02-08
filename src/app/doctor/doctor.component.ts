import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DoctorService } from '../api/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent implements OnInit
{
    services :DoctorService;
    dtoDoctorForm: FormGroup;

    //initalize the services.
    constructor(_services:DoctorService) {
      this.services = _services;
     }

    // ngOnInit() {
    // this.createForm(new DtoDoctorFormControl());
    // }

    // createForm(_doctordtoforms :DtoDoctorFormControl) {
    //   this.dtoDoctorForm = new FormGroup({
    //     // name: new FormGroup({
    //     //   firstName: this.firstName,
    //     //   lastName: this.lastName,
    //     // }),
    //     // email: this.email,
    //     // password: this.password,
    //     // language: this.language
    //     title:_doctordtoforms.title,
    //     name:_doctordtoforms.name
    //   });
    // }

    // onSubmit() {
    //   console.log('reactiveForm' , this.dtoDoctorForm.value);
    // }



  langs: string[] = ["English", "French", "German"];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  createFormControls() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl("", Validators.required);
  }

  createForm() {
    this.dtoDoctorForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      this.myform.reset();
    }
  }
}
