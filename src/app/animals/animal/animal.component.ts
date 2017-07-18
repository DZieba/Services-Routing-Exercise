import { Component, OnInit } from '@angular/core';
import {AnimalsService} from '../../animals.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
animal:  {id:number, name:string, race:string, age:number,owner:string};
  constructor(private animalsService: AnimalsService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
const id=+this.route.snapshot.params['id'];
this.animal=this.animalsService.getAnimal(id);

  this.route.params
  .subscribe(
    (params:Params) => {
      this.animal=this.animalsService.getAnimal(params['id']);

    }
  )}

  EditAnimal(){
    this.router.navigate(['/animals',this.animal.id,'edit'] )
  }
}
