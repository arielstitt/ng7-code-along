import { Injectable } from '@angular/core';
//to gain access throughout the app, http client needs to be imported here
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// serviced allow you to define code that needs to be accesable across mltiple components in a central location 

//create an instance of the http client in the constructor
  constructor(private http:HttpClient) { }

  // firstClick () {
  //   // we want to be able to access this from the home ts file
  //   return console.log("clicked from data.services.ts")
  // }

  
  getUsers() {
    return this.http.get('http://regres.in/api/users');
  }
}
