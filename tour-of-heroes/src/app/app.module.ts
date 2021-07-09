import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NavHeroesComponent } from './heroes/nav-heroes/nav-heroes.component';
import { MainHeroesComponent } from './heroes/main-heroes/main-heroes.component';
import { ContentNavHeroesComponent } from './heroes/nav-heroes/content-nav-heroes/content-nav-heroes.component';
import { MainHeaderComponent } from './heroes/main-heroes/main-header/main-header.component';
import { MainContentHerosComponent } from './heroes/main-heroes/main-content-heros/main-content-heros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NavHeroesComponent,
    MainHeroesComponent,
    ContentNavHeroesComponent,
    MainHeaderComponent,
    MainContentHerosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
