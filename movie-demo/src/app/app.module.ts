import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './shared/movie.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MovieListComponent],
  imports: [NgbModule.forRoot(), BrowserModule, HttpClientModule],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
