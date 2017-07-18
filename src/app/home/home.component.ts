import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
  }
onLoadAnimals(){
    this.router.navigate(['/animals'],{relativeTo:this.route})
}
  onLoadOwners(){
    this.router.navigate(['/owners'],{relativeTo:this.route})
  }
}
