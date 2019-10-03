import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IMovie } from './movie'

import { MovieDetialComponent } from './movie-detial.component';

describe('MovieDetialComponent', () => {
  let component: MovieDetialComponent;
  let fixture: ComponentFixture<MovieDetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
