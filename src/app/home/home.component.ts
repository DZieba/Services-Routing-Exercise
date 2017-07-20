import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loggedin=false;
  constructor(private router: Router,
  private route: ActivatedRoute,
  private authService: AuthService) { }

  ngOnInit() {
  }
onLoadAnimals(){
    this.router.navigate(['/animals'],{relativeTo:this.route})
}
  onLoadOwners(){
    this.router.navigate(['/owners'],{relativeTo:this.route})
  }

  logIn(){
    this.authService.logIn();
    this.loggedin=true;
  }
  logOut(){
    this.authService.logOut();
    this.loggedin=false;
  }
}
