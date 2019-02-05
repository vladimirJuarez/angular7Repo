import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
          <div>
            <pm-productlist></pm-productlist>
          </div>
  `
  /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
