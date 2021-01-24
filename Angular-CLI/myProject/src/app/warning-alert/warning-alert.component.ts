import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  press = false; 
  log: Date[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(){
    this.press = !this.press; 
    /* this.log.push(this.log.length + 1); */ 
    this.log.push(new Date());
  }

}
