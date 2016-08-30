import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService {

  constuctor() {}

  getCustomers() {
    return [
      {id: 1,name: 'ward'},
      {id: 2,name: 'kevin'},
      {id: 3,name: 'eric'},
      {id: 4,name: 'john'},
      {id: 5,name: 'emmet'},
      {id: 6,name: 'sally'},
    ];
  }

}
