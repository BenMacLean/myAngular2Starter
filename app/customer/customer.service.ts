import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operators/map';
import {Observable} from 'rxjs/Rx';

const URL_CUSTOMER = 'app/customers.json'

@Injectable()
export class CustomerService {
  constuctor(private _http: Http) {}

  getCustomers() {
    return this._http.get(URL_CUSTOMER)
      .map((response: Response) => response.json());
  }

}
