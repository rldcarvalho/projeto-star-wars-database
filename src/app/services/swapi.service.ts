import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../shared/models/apiResponse';
import { Film } from '../shared/models/film';
import { Observable } from 'rxjs';
import { Starship } from '../shared/models/starship';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://swapi.dev/api';

  getFilms(title?: string):  Observable<APIResponse<Film>> {
    let url = `${this.baseUrl}/films`
    if (title) {
      url += `?search=${title}`
    }
    return this.http.get<APIResponse<Film>>(url)
  };

  getStarships(page: number, name?: string): Observable<APIResponse<Starship>> {
    let url = `${this.baseUrl}/starships`;
    if(name) {
      url += `?search=${name}`;
    } else { 
      url += `/?page=${page}`;
    }
    return this.http.get<APIResponse<Starship>>(url)
  }

}
