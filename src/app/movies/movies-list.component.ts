import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
//   selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
  //providers: [MovieService] //If we want to use movie service only for movie component, we register service with movie component only
})
export class MovieListComponent implements OnInit {
  movieTitle : string = 'Movies List';
  //listFilter: string = 'Terminator';
  //private _movieService; //property for service
  _listFilter:string;
   
  get listFilter():string{
      return this._listFilter;
  }
  set listFilter(value:string){
      this._listFilter = value;
      this.filterMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }

  showTitle : boolean = false;
  errorMessage: string;
  filterMovies : IMovie[];
  movies : IMovie[] = [];
//       [{"movieId" : 2,
// "movieName" :"Terminator",
// "movieRating" : 4.2
// },
// {
//     "movieId" : 4,
//     "movieName" : "Avengers",
//     "movieRating" : 10
// }];

constructor(private movieService:MovieService) //constructor will be initialized first later ngOnInit()
{
    //this._movieService = movieService;
    //this.filterMovies = this.movies;
}

performFilter(filterInput : string) : IMovie[]{
    filterInput = filterInput.toLowerCase();
    return this.movies.filter((movie : IMovie)=> movie.movieName.toLowerCase().indexOf(filterInput)!==-1);

}
toggleTitle() : void{
    this.showTitle = !this.showTitle;
}
ngOnInit() : void
{
    console.log('movies data is '+this.movies.length);
    //this.movies = this.movieService.getMovies(); now we have used observable to get data from service we have to subscribe to data
    this.movieService.getMovies().subscribe(
        {
            next: movieData => {
                this.movies = movieData;
                this.filterMovies = this.movies;
              },
              error: err => this.errorMessage = err
        }
    );
    //this.filterMovies = this.movies;//we move this to next{} section because we dont know when we will recieve data from request.
    

}

onRatingClicked(message:string):void{
    this.movieTitle = message;
}
}