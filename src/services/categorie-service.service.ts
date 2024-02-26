import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';

@Injectable()
export class CategorieServiceService {
  categories: Categorie [] = [];
  constructor() {
    this.categories.push(new Categorie('Action')),
    this.categories.push(new  Categorie(`Horror`)),
    this.categories.push(new Categorie(`Romance`)),
    this.categories.push(new Categorie(`Shonen`)),
    this.categories.push(new Categorie(`Others`))



   }



}