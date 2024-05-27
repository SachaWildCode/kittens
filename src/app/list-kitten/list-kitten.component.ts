import { Component } from '@angular/core';
import { KittenService } from '../services/kitten.service';
import { Kitten } from '../models/kitten.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  kittens!: Kitten[];
  selectedKitten!: Kitten | null;
  constructor(private KittenService: KittenService) {}
  ngOnInit() {
    this.kittens = this.KittenService.getKittens();
  }
  adopt(kitten: Kitten) {
    this.KittenService.adoptKitten(kitten);
    this.kittens = this.KittenService.getKittens();
    this.selectedKitten = null; // Clear the selected kitten if needed
  }
}
