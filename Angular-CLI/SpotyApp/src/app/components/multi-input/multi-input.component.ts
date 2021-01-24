import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html'
})
export class MultiInputComponent implements OnInit {

  items: any[]=[];
  mayor: boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }
 
  array(number: any){
    if (number >= 21){
      this.mayor = true;
    }else{
      this.mayor = false; 
    }
    var temp=[];
    for(var i=0;i<number; i++)
      temp.push(i);
    this.items=temp;
  }

}