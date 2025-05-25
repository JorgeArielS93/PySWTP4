import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-punto-a',
  imports: [CommonModule,RouterLink],
  templateUrl: './punto-a.component.html',
  styleUrl: './punto-a.component.css',
})
export class PuntoAComponent implements OnInit {
  noticias: any[] = [];
  cargando: boolean = true; // ✅ Spinner

  constructor(private newsService: NoticiasService) {}

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  obtenerNoticias() {
    this.cargando = true;
    this.newsService.getNews().subscribe(
      result => {
        this.noticias = result.homepageArticles[0].articles;
        this.cargando = false; // ✅ Ocultar spinner al terminar
      },
      error => {
        console.log(error);
        this.cargando = false;
      }
    );
  }
}
