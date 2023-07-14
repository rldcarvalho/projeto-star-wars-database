import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Film } from './film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
   constructor(private http: HttpClient){}

   jsonFilmsURL = 'assets/films.json'
   films: Film[] = [];
   displayedColumns: string[] = ['title', 'director', 'producer', 'releaseDate'];

   getFilms() {
    this.http.get<any>(this.jsonFilmsURL).subscribe((response) => {
      this.films = response.results.map((filmData: any) => {
        const releaseDate = this.formatDate(filmData.release_date);
        
        const film: Film = {
          title: filmData.title,
          director: filmData.director,
          producer: filmData.producer,
          releaseDate: releaseDate
        };
        return film;
      });
      console.log(this.films);
    });
  }

  formatDate(date: string){
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('pt-BR');
  }

  ngOnInit() {
    this.getFilms();
  }
}
