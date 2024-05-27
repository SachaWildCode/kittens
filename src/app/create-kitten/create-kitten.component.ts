import { Component } from '@angular/core';
import { KittenService } from '../services/kitten.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KittenBreed } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css',
})
export class CreateKittenComponent {
  kittenForm!: FormGroup;
  breeds = Object.values(KittenBreed);

  constructor(private KittenService: KittenService, private fb: FormBuilder) {}
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.kittenForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      birthdate: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }
  addKitten() {
    this.KittenService.addKitten(this.kittenForm.value);
    this.kittenForm.reset();
  }
}
