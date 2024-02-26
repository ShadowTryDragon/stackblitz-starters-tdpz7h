import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-show-details',
  standalone: true,
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private showDataService: ShowDataService) { }
  get show(): Show {
    return this.showDataService.detailShow;
  }
  ngOnInit() {
  }

}