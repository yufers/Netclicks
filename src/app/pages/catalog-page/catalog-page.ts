import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constants/film.constants';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css',
})
export class CatalogPage {
  // public films: Film[] = FILMS;

  constructor(private _filmsService: FilmsService) {}

  public get films(): Film[] {
    return this._filmsService.getFilteredFilms;
  }
}
