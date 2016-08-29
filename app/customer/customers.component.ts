import {Component, Input, OnInit} from '@angular/core'

import {CustomerComponent} from './customer.component';


@Component({
  moduleId: __moduleName,
  selector: 'app-customers',
  templateUrl: 'customers.component.html',
  directives: [CustomerComponent]

})
export class CustomersComponent implements OnInit {
  customers = [
    {id: 1,name: 'ward'},
    {id: 2,name: 'kevin'},
    {id: 3,name: 'eric'},
    {id: 4,name: 'john'},
    {id: 5,name: 'emmet'},
    {id: 6,name: 'sally'},
  ];
  constructor() {}

  ngOnInit() {}
}
