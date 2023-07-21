import { Component } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Starship } from 'src/app/shared/models/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {

  starships: Starship[] = [];
  displayedColumns: string[] = ['name', 'model', 'manufacturer', 'hyperdrive_rating'];
  showSpinner = false;
  filterStarship = '';

  constructor(private swapiService: SwapiService){}

  getStarships(name?: string){
    this.showSpinner = true;
    this.swapiService.getStarships(name).subscribe(response => {
      this.starships = response.results;
      this.showSpinner = false;
    })
  }

  filterByName(){
    this.getStarships(this.filterStarship);
  }

  ngOnInit() {
    this.getStarships();
  }

}
