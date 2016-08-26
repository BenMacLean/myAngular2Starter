import {Component} from '@angular/core'

import {CustomerComponent} from './customer/customer.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomerComponent]

})
export class AppComponent {

    title = 'Customer App';
    name = 'Ward';
    wardsColor = 'green';
    customers = [
      {id: 1,name: 'ward'},
      {id: 2,name: 'kevin'},
      {id: 3,name: 'eric'},
      {id: 4,name: 'john'},
      {id: 5,name: 'emmet'},
      {id: 6,name: 'sally'},
    ];

    changeSuitColor() {
      this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
    }
}
