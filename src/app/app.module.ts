import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {AnimalsService} from './animals.service';
import {Routes,RouterModule} from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { OwnersComponent } from './owners/owners.component';
import { HomeComponent } from './home/home.component';
import { AnimalComponent } from './animals/animal/animal.component';
import { EditAnimalComponent } from './animals/edit-animal/edit-animal.component';
import {OwnersService} from './owners.service';
import { NewAnimalComponent } from './animals/new-animal/new-animal.component';

const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'animals', component: AnimalsComponent},
  {path:'animals/new-animal', component: NewAnimalComponent},
  {path:'animals/:id/edit', component: EditAnimalComponent},
  {path:'animals/:id/:name', component: AnimalComponent},
  {path:'owners', component: OwnersComponent}]


@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    OwnersComponent,
    HomeComponent,
    AnimalComponent,
    EditAnimalComponent,
    NewAnimalComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AnimalsService, OwnersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
