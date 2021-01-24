import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authS: AuthService) { }

  ngOnInit(): void {
  }

  loadServer(id: number){
    console.log("Hola");
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment:'loading'});
  }

  onLogIn() {
    this.authS.logIn();
    alert("Log in successful");
  }

  onLogOut() {
    this.authS.logOut();
    alert("Log out completed");
  }
}
