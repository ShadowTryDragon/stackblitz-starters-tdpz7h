import { Categorie } from "./categorie";

export class Show {

  constructor(public id: number, public title: string,public categorie: Categorie, public image?: string, public summary?: string) {
  }

}