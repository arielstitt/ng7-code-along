import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// here is the logic for the boolean in the html file
  h1Style: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  // This is where the logic for the click button lives
  firstClick() {
    console.log("clicked!")
    // selected h1Style and makes it true
    this.h1Style = true;
  }

}
