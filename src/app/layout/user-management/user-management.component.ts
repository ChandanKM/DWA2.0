import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  animations: [routerTransition()]
})
export class UserManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
