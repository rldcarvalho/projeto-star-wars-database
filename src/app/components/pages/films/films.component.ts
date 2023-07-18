import { Film } from 'src/app/shared/models/film';
import { SwapiService } from './../../../services/swapi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
   constructor(private swapiService: SwapiService){}

   films: Film[] = [];
   displayedColumns: string[] = ['title', 'director', 'producer', 'release_date'];

   getFilms() {
    this.swapiService.getFilms().subscribe((response) => this.films = response.results)
  }

  formatDate(date: string){
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('pt-BR');
  }

  ngOnInit() {
    this.getFilms();
  }
}
