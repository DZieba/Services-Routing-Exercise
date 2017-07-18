import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

accounts: {name:string, status: string}[]=[];

  constructor(){}
  ngOnInit(){

  }
}
