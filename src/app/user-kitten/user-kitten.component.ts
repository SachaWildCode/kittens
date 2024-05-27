import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css',
})
export class UserKittenComponent {
  adoptedKittens!: Kitten[];
  constructor(private KittenService: KittenService) {}
  ngOnInit() {
    this.adoptedKittens = this.KittenService.getAdoptedKittens();
  }
}
