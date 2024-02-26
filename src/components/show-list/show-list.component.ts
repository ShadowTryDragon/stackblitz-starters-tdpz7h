import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { Show } from '../../models/show';
import { ShowDataService } from '../../services/show-data.service';


@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  suchString: string;
  editShow: Show;
 

  constructor(private showDataService: ShowDataService) {
    
  }

  ngOnInit() {
  }

  get shows(): Show[] {
    if(!this.suchString) {
    return this.showDataService.shows;
    }

    return this.showDataService.shows.filter(s => s.title.toLowerCase().includes(this.suchString.toLowerCase()))

  }

  edit(show: Show): void {
    this.editShow = show;
  }

  toEdit(show: Show): boolean {
    if (this.editShow === show) {
      return true;
    } else {
      return false;
    }
  }

  saveEdit(): void {
    this.editShow = null;
  }

  delete(show: Show): void {
    this.showDataService.deleteShow(show);
  }

  showDetails(show: Show) {
    this.showDataService.showShows(show);
  }

}