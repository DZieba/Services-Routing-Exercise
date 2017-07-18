import { Component, OnInit } from '@angular/core';
import {AnimalsService} from '../../animals.service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  animal:  {id:number, name:string, race:string, age:number,owner:string};
  animalName='';
  animalAge:number;
  animalRace='';
  animalOwner='';
  constructor(private animalsService: AnimalsService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    const id=+this.route.snapshot.params['id'];
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
this.animal=this.animalsService.getAnimal(id);
this.animalName=this.animal.name;
this.animalAge=this.animal.age;
this.animalRace=this.animal.race;
this.animalOwner=this.animal.owner;

  }

  onEditAnimal(){
this.animalsService.EditAnimal(this.animal.id, this.animal.name,this.animal.race, this.animal.age,this.animal.owner);
  }

}
