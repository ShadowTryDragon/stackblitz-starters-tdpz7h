import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { CategorieServiceService } from './services/categorie-service.service';
import { ShowDataService } from './services/show-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ShowDataService, CategorieServiceService],
  imports: [ShowListComponent, ShowFormComponent, ShowDetailsComponent],
  template: `
<div class="container">

<div class="row">
<h1>TV-Serien</h1>

</div>

<div class="row">

<div class="col">

<app-show-list></app-show-list>
<app-show-form></app-show-form>


</div>

<div class="col">

<app-show-details></app-show-details>

</div>

</div>

</div>
  `
})

export class App {
  name = 'Angular';
}

bootstrapApplication(App);
