import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../shared/models/apiResponse';
import { Film } from '../shared/models/film';
import { Observable } from 'rxjs';

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

}
