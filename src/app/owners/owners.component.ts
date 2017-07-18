import { Component, OnInit } from '@angular/core';
import {OwnersService} from "../owners.service";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
private owners:{ name:string, city:string}[]=[];
  constructor(private ownersService: OwnersService) { }

  ngOnInit() {
    this.owners=this.ownersService.getOwners();
  }
  onAddOwner(){

  }

}
