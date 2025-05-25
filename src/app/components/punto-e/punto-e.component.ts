import { Component } from '@angular/core';
import { QrCodeGeneratorService } from '../../services/qr-code-generator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto-e',
  imports: [CommonModule,FormsModule],
  templateUrl: './punto-e.component.html',
  styleUrl: './punto-e.component.css',
})
export class PuntoEComponent {
  texto = '';
  qrImg!: string;
  isLoading = false;

  constructor(private qrService: QrCodeGeneratorService) {}

  obtenerQr() {
    this.isLoading = true;
    this.qrImg = '';
    this.qrService.getQr(this.texto, '500').subscribe((base64Img) => {
      this.qrImg = base64Img;
      this.isLoading = false;
    });
  }
}