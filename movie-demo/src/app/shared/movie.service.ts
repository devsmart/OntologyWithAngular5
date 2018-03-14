import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie.model';

interface UpcomingMoviesResponse {
  dates: any;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

@Injectable()
export class MovieService {
  private headers: HttpHeaders;
  private apiUrl: string;
  private apiKey: string;
  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://api.themoviedb.org/3/'; // usually read from configs E.G. AppConfig.endpoints.api;
    this.apiKey = '4cb8fcf888a36ad99d8b5f083536cf66';
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http
      .get<UpcomingMoviesResponse>(
        this.apiUrl + 'movie/upcoming?api_key=' + this.apiKey
      )
      .map(response => {
        return response.results;
      })
      .catch(error => this.handleError(error));
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http
      .get(this.apiUrl + 'movie/' + movieId + '?api_key=' + this.apiKey)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }
}
