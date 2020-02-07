import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit
{
    public addresses: any[] = [{
    address: '',
    street: '',
    city: '',
    country: ''
    }];

    constructor() { }

    ngOnInit() {

    }

    addAddress() {
        this.addresses.push({
          address: '',
          street: '',
          city: '',
          country: ''
        });
      }

      removeAddress(i: number) {
        this.addresses.splice(i, 1);
      }

      logValue() {
        console.log(this.addresses);
      }

}
