import {Component, OnInit} from '@angular/core';
import {Movie} from '../shared/movie.model';
import {MovieService} from '../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  //  constructor() {
  constructor(private movieService: MovieService) {}

  getUpcomingMovies() {
    // this.movieService.getUpcomingMovies().subscribe((movies: Array<Movie>) => {
    //   console.log(movies);
    //   this.movies = movies;
    // });
    this.movieService
      .getUpcomingMovies()
      .subscribe(movies => (this.movies = movies));
  }
  getImagePath(path) {
    if (path === '') {
      return '';
    }
    return 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + path;
  }
  onSelect(movie) {
    this.selectedMovie = movie;
  }
  ngOnInit() {
    this.getUpcomingMovies();
  }
}
