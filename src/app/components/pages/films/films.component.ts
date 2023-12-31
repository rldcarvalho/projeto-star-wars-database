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
  filterTitle = '';
  showSpinner = false;

  getFilms(title?: string) {
    this.showSpinner = true
    this.swapiService.getFilms(title).subscribe((response) => {
    this.films = response.results;
    this.showSpinner = false;
  })
  
  }

  filterByTitle(){
    this.getFilms(this.filterTitle)
  }

  formatDate(date: string){
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('pt-BR');
  }

  ngOnInit() {
    this.getFilms();
  }
}
