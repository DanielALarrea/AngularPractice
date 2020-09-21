import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Project';
  todayDate = new Date();
  jsonVal = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  isAvailable = true;

  myClickFunction(event) {
    this.isAvailable = false;
    alert("Button clicked");
    console.log(event);
  }

  changeMonths(event) {
    alert("changed month from dropdown");
    console.log(event);
  }
}
