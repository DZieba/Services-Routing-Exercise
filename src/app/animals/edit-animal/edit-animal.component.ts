import { Component, OnInit } from '@angular/core';
import {AnimalsService} from '../../animals.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit, CanComponentDeactivate {
  animal:  {id:number, name:string, race:string, age:number,owner:string};
  animalName='';
  animalAge:number;
  animalRace='';
  animalOwner='';
  allowEdit=false;
  changesSaved=false;
  constructor(private animalsService: AnimalsService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        (queryParams:Params) =>{
          this.allowEdit=queryParams['allowEdit'] === '1'? true : false;

        }
      );
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
this.animalsService.EditAnimal(this.animal.id, this.animalName,this.animalRace, this.animalAge,this.animalOwner);
this.changesSaved=true;
this.router.navigate(['../'], {relativeTo:this.route})
  }
canDeactivate():Observable<boolean> | Promise<boolean> | boolean {
if ((this.animalName!==this.animal.name || this.animalAge!==this.animal.age || this.animalRace!==this.animal.race ||this.animalOwner!==this.animal.owner)&&!this.changesSaved){
  return confirm('Do you want to go out of this Component without saving changes?');
}
else {
  return true;
}

}
}
