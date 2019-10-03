import { IMovie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';

@Injectable({
    providedIn : 'root'
})
export class MovieService{

    private movieUrl = 'assets/api/movies.json';
    constructor(private http: HttpClient)
    {

    }
    getMovies() : Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.movieUrl).pipe(
            tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError)
        );
        // return [{"movieId" : 2,
        // "movieName" :"Terminator",
        // "movieRating" : 4.2
        // },
        // {
        //     "movieId" : 4,
        //     "movieName" : "Avengers",
        //     "movieRating" : 10
        // },
        // {
        //     "movieId" : 5,
        //     "movieName" : "Game Over",
        //     "movieRating" : 7.8
        // }];
    }
    private handleError(err:HttpErrorResponse)
    {
        console.log(err);
        return throwError(err);
    }
}