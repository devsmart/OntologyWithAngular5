export class Movie {
  constructor(
    public adult: boolean,
    public backdrop_path: string,
    public genre_ids: Array<number>,
    public id: number,
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity,
    public poster_path: string,
    public release_date: string,
    public title: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number
  ) {}
}
