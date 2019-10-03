import { Component, OnChanges, Input, Output,EventEmitter  } from '@angular/core';
@Component({
    selector: 'mv-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges
{
   @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); //event 

    ngOnChanges(): void{
        this.starWidth = this.rating * 150/10;
    }
    clickStar(): void{
        console.log(`The rating was clicked ${this.rating}`);
        this.ratingClicked.emit(`The rating was clicked ${this.rating}`);//To pass the click event to container
    }
}