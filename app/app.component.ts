import {Component} from '@angular/core'

import {CustomersComponent} from './customer/customers.component';

import {CustomerService} from './customer/customer.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [CustomerService]


})
export class AppComponent {

  constructor(private _customerService: CustomerService) {}


    title = 'Customer App';
    name = 'Ward';
    wardsColor = 'green';


    changeSuitColor() {
      this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
    }
}
