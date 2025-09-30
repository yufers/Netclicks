import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { FILMS } from '../constants/film.constants';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private _films: Film[] = FILMS;
  private _searchString: string = '';

  public get getFilms(): Film[] {
    return this._films;
  }

  public get getFilteredFilms(): Film[] {
    return this._films.filter((item) => item.title.includes(this._searchString));
  }

  public get searchString(): string {
    return this._searchString;
  }

  public set searchString(value: string) {
    this._searchString = value;
  }
}
