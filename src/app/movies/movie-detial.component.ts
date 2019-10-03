import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-detial',
  templateUrl: './movie-detial.component.html',
  styleUrls: ['./movie-detial.component.css']
})
export class MovieDetialComponent implements OnInit {
  pageTitle = "Movie Details";
  movie:IMovie;

  constructor(private route: ActivatedRoute, private router:Router) {
    // console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id}`;
    this.movie = 
      {
        "movieId" : id,
        "movieName" : "Confession of a Murderer",
        "movieRating" : 8.3
        }
  
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
