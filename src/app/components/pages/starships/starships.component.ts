import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  totalStarships!: number;
  currentPage = 1;

  constructor(private swapiService: SwapiService){}

  getStarships(page = 1, name?: string,){
    this.showSpinner = true;
    this.swapiService.getStarships(page, name).subscribe(response => {
      this.totalStarships = response.count;
      this.starships = response.results;
      this.showSpinner = false;
    })
  }

  changePage(e: PageEvent){
    this.currentPage = e.pageIndex + 1;
    this.getStarships(this.currentPage);
  }

  filterByName(){
    this.getStarships(1, this.filterStarship);
  }

  ngOnInit() {
    this.getStarships();
  }

}
