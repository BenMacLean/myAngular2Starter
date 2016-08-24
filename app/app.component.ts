import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html' 
})
export class AppComponent {

    title = 'Customer App';
    name = 'Ward';
    wardsColor = 'blue';
    changeSuitColor() {
      this.wardsColor = 'red';
    }
}
