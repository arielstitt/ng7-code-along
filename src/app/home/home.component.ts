import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// here is the logic for the boolean in the html file
  h1Style: Boolean = false;

  //in order to access the methods from data.service.ts
  //create an instance of it through dependancy injection in the constructor
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  // This is where the logic for the click button lives
  firstClick() {
    console.log("clicked!")
    // selected h1Style and makes it true
    // this.h1Style = true;

//this.data will give you access to the data service method
    this.data.firstClick();

  }

}
