import { Injectable } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Injectable({
  providedIn: 'root',
})
export class KittenService {
  private kittens: Kitten[] = [];
  private adoptedKittens: Kitten[] = [];

  getKittens(): Kitten[] {
    return this.kittens;
  }

  getAdoptedKittens(): Kitten[] {
    return this.adoptedKittens;
  }

  addKitten(kitten: Kitten) {
    kitten.id = this.kittens.length + 1;
    this.kittens.push(kitten);
  }

  adoptKitten(kitten: Kitten) {
    if (this.kittens.includes(kitten)) {
      this.kittens = this.kittens.filter((k) => k !== kitten);
      this.adoptedKittens.push(kitten);
    }
  }
}
