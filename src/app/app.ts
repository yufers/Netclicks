import { Component, signal } from '@angular/core';
import { Film } from './models/film.model';
import { FILMS } from './constants/film.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  public films: Film[] = FILMS
}
