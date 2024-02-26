import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Categorie } from '../models/categorie';
import { Show } from '../models/show';
import { CategorieServiceService } from './categorie-service.service';

@Injectable()

export class ShowDataService {

  shows: Show[] = [];
detailShow: Show;
  constructor(private httpClient: HttpClient,private categorieService: CategorieServiceService) {

// [0] = Action
// [1] = Horror
// [2] = Romance
// [3] = Shonen
// [4] = Others
    this.shows.push(
      new Show(1, 'Naruto', this.categorieService.categories[3]),
      new Show(2, 'One Piece',this.categorieService.categories[3]),
      new Show(3, 'Code Geass',this.categorieService.categories[0]),
      new Show(4, 'Bungo Stray Dogs',this.categorieService.categories[0]),
      new Show(5, 'Demon Slayer',this.categorieService.categories[0]),
      new Show(6, 'Akame Ga Kill',this.categorieService.categories[0]),
      new Show(7, 'Kill la Kill',this.categorieService.categories[0]),
      new Show(8, `Jujutsu Kaisen`,this.categorieService.categories[0]),
      new Show(9, `Tokyo Revengers`,this.categorieService.categories[0]),
      new Show(10, `Tokyo Ghoul`,this.categorieService.categories[0]),
      new Show(11,`Naruto Shippuden`,this.categorieService.categories[5]),
      new Show(12, `Boruto`,this.categorieService.categories[3]),
      new Show(13, `Charlotte`,this.categorieService.categories[2]),
      new Show(14, `High School DxD`,this.categorieService.categories[2]),
      new Show(15, `Asterisk War`,this.categorieService.categories[0]),
      new Show(16,`Rakudai Kishi no Kyabarury`,this.categorieService.categories[2]),
      new Show(17,`The Testament of Sister New Devil`,this.categorieService.categories[2]),
      new Show(18, `Darling in the Franxx`,this.categorieService.categories[2]),
      new Show(19, `No Game No Life`,this.categorieService.categories[0]),
      new Show(20, `Goblin Slayer`,this.categorieService.categories[0]),
      new Show(21,`Lost Song`,this.categorieService.categories[0]),
      new Show(22,`Black Clover`,this.categorieService.categories[0]),
      new Show(23, `Akatsuki no Yona`,this.categorieService.categories[0]),
      new Show(24, `Dragon Ball `,this.categorieService.categories[3]),
      new Show(25, `Dragon Ball Z `,this.categorieService.categories[3]),
      new Show(26, `Dragon Ball GT `,this.categorieService.categories[3]),
      new Show(27, `Dragon Ball Super`,this.categorieService.categories[3]),
      new Show(28, `Bleach `,this.categorieService.categories[3]),
      new Show(29, `that time i got reincarnated as a slime`,this.categorieService.categories[2]),
      new Show(30, `Death Parade`,this.categorieService.categories[0]),
      new Show(31, `Death Note`,this.categorieService.categories[0]),
      new Show(32, `Angel Beats!`,this.categorieService.categories[0]),
      new Show(33,`Hell´s Paradise`,this.categorieService.categories[0]),
      new Show(34, `Assassination Classroom,`,this.categorieService.categories[4]),
      new Show(35, `The Seven Deadly Sins`,this.categorieService.categories[0]),
      new Show(36, `The 7 Deadly Sins`,this.categorieService.categories[0]),
      new Show(37, `Nanatsu no Taizai`,this.categorieService.categories[0]),
      new Show(38, `Free!`,this.categorieService.categories[4]),
      new Show(39, `Haikyou`,this.categorieService.categories[4]),
      new Show(40, `Kuroko's Basketball`,this.categorieService.categories[4])
    
    )
  }

  saveShow(show: Show): void {
    this.shows.push(show);
  }

  deleteShow(show: Show): void {
    this.shows = this.shows.filter(s => s !== show);
  }
  async showShows(show: Show) {
    try {
    const data: any = await lastValueFrom 
    (this.httpClient.get('https://api.tvmaze.com/singlesearch/shows?q=' + show.title))
    show.summary = data.summary;
    show.image = data.image.original;
    this.detailShow = show;
  }
catch(e) {
  alert(`Keine Show Gefunden`)
  
}
  }
}