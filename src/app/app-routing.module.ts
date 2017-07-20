
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {AnimalsComponent} from "./animals/animals.component";
import {NewAnimalComponent} from "./animals/new-animal/new-animal.component";
import {EditAnimalComponent} from "./animals/edit-animal/edit-animal.component";
import {AnimalComponent} from "./animals/animal/animal.component";
import {OwnersComponent} from "./owners/owners.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {Routes,RouterModule} from "@angular/router";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./animals/edit-animal/can-deactivate-guard.service";

const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'animals', canActivate:[AuthGuard] , component: AnimalsComponent, children: [
    {path:'new-animal', component: NewAnimalComponent},
    {path:':id/:name/edit', component: EditAnimalComponent, canDeactivate:[CanDeactivateGuard]},
    {path:':id/:name', component: AnimalComponent}
  ]},
  {path:'owners', component: OwnersComponent},
  {path:'not-found', component: PageNotFoundComponent},
  {path: '**',redirectTo: '/not-found'}
];


@NgModule({
imports: [
  RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})
export class AppRoutingModule {





}
