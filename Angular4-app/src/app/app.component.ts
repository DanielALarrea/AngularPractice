import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Project';
  todayDate;
  componentproperty;
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

  emailid;
  formdata;
  constructor(private myservice: MyserviceService, private http: HttpClient) {}
  httpdata;
  searchparam = 2;
  jsondata;
  name;
  ngOnInit() {
    this.todayDate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = "component created";
    this.componentproperty = this.myservice.serviceproperty;

    this.http.get("http://jsonplaceholder.typicode.com/users?id="+this.searchparam).
    subscribe((data) => {this.converttoarray(data);})

    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordValidation)
    });
  }
  converttoarray(data) {
    console.log(data);
    this.name = data[0].name;
  }

  onClickSubmit(data) {
    alert("Entered email id: " + data.emailid);
    this.emailid = data.emailid;
  }

  passwordValidation(formcontrol) {
    if(formcontrol.value.length < 5) {
      return {"passwd" : true};
    }
  }
}
