import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
// below is an example of TypeScript
// we are binding the app title property to "Ng-code along"
// in the nav.component.html file there is an appTitle that will use interpolation
  appTitle: String = "Ng-CodeAlong";

  constructor() { }

  ngOnInit() {
  }

}
