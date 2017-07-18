import { Component, OnInit } from '@angular/core';
import {AnimalsService} from '../animals.service';
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
private animals: {id:number, name:string, race:string, age:number,owner:string}[]=[];

  constructor(private animalsService: AnimalsService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.animals=this.animalsService.getAnimals();
  }
onAddAnimal(){
    this.router.navigate(['/animals/new-animal']);
}
}
