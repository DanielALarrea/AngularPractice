import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceproperty = "Service created";
  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
