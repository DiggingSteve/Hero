import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from "app/dashboard.component";
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    declarations: [
        AppComponent, HeroDetailComponent, HeroComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      AppRoutingModule
       
      
    ],
    providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
