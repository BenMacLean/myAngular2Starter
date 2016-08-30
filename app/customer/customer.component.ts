import {Component, Input, OnInit} from '@angular/core'

import {CustomerService} from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customer',
    templateUrl: 'customer.component.html',
})
export class CustomerComponent implements OnInit {
  constructor (private _customerService:  CustomerService) {}
  @Input() customer: {id: number, name: string};

  myColor = 'gray';

    ngOnInit() { }
}
