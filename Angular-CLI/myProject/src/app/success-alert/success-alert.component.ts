import { Component } from '@angular/core'; 

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html'
})

export class SuccessAlertComponent {

    username = '';
    flag = '';

    resetU() {
        this.flag = this.username; 
        if (this.flag!=''){
            this.username = ''; 
        }
    }

    userName (event: Event) {
        this.username = (<HTMLInputElement>event.target).value; 
    }
    
}