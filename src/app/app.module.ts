import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movies-list.component';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetialComponent } from './movies/movie-detial.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { MovieDetailGuard } from './movies/movie-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    StarComponent,
    MovieDetialComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'movies', component: MovieListComponent},
      {path: 'movies/:id', canActivate : [MovieDetailGuard],component: MovieDetialComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: ' ', redirectTo: 'welcome',pathMatch:'full'},
      {path: '**', redirectTo: 'welcome',pathMatch:'full'}, 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
