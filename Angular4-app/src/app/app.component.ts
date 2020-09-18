import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4-app';
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
