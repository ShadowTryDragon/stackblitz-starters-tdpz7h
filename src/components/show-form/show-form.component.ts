import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../../models/categorie';
import { Show } from '../../models/show';
import { CategorieServiceService } from '../../services/categorie-service.service';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {

  show: Show;
  
  constructor(private showDataService: ShowDataService, private categorieService: CategorieServiceService) {
    this.show = new Show(null, null, null);
  }
  ngOnInit() {}

  save() {
    this.showDataService.saveShow(this.show);
    
    this.show = new Show(null, null,null);
  }



}