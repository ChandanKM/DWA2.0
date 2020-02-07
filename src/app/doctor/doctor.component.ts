import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit
{

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  myform: FormGroup;
  firstName: FormControl; 
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

    public addresses: any[] = [{
    address: '',
    street: '',
    city: '',
    country: ''
    }];

    constructor() { }

    ngOnInit() {
    this.createFormControls();
    this.createForm();
    }

    createFormControls() {
      this.firstName = new FormControl('', Validators.required);
      this.lastName = new FormControl('', Validators.required);
      this.email = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]);
      this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]);
      this.language = new FormControl('', Validators.required);
    }

    createForm() {
      this.myform = new FormGroup({
        name: new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName,
        }),
        email: this.email,
        password: this.password,
        language: this.language
      });
    }

    // addAddress() {
    //     this.addresses.push({
    //       address: '',
    //       street: '',
    //       city: '',
    //       country: ''
    //     });
    //   }

      // removeAddress(i: number) {
      //   this.addresses.splice(i, 1);
      // }

      // logValue() {
      //   console.log(this.addresses);
      // }

      // logForm(value: any) {
      //   console.log(value);
      // }

}
