import { Component } from '@angular/core';
import { ImageGenerationService } from '../../services/image-generation.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto-d',
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-d.component.html',
  styleUrl: './punto-d.component.css'
})
export class PuntoDComponent {
  prompt = '';
  imagenBase64: string | null = null;
  isLoading = false;

  constructor(private imageService: ImageGenerationService) {}

  async generarImagen() {
    this.isLoading = true;
    this.imagenBase64 = null;

    const imagen = await this.imageService.generateImage(this.prompt);
    this.imagenBase64 = imagen;

    this.isLoading = false;
  }
}