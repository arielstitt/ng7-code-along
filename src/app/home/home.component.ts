import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// here is the logic for the boolean in the html file
  //h1Style: Boolean = false;

  //define the users object that is being grabbed from the api
  users: Object;

  //in order to access the methods from data.service.ts
  //create an instance of it through dependancy injection in the constructor
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.data)
    })

  }
  // This is where the logic for the click button lives
//   firstClick() {
//     console.log("clicked!")
//     // selected h1Style and makes it true
//     // this.h1Style = true;

// //this.data will give you access to the data service method
//     this.data.firstClick();

  }

}
