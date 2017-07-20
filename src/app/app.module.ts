import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {AnimalsService} from './animals.service';
import { AnimalsComponent } from './animals/animals.component';
import { OwnersComponent } from './owners/owners.component';
import { HomeComponent } from './home/home.component';
import { AnimalComponent } from './animals/animal/animal.component';
import { EditAnimalComponent } from './animals/edit-animal/edit-animal.component';
import {OwnersService} from './owners.service';
import { NewAnimalComponent } from './animals/new-animal/new-animal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";
import {CanDeactivateGuard} from "./animals/edit-animal/can-deactivate-guard.service";




@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    OwnersComponent,
    HomeComponent,
    AnimalComponent,
    EditAnimalComponent,
    NewAnimalComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AnimalsService, OwnersService,AuthGuard,AuthService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
