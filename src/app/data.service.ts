import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// serviced allow you to define code that needs to be accesable across mltiple components in a central location 
  constructor() { }

  firstClick () {
    // we want to be able to access this from the home ts file
    return console.log("clicked from data.services.ts")
  }
}
