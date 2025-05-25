import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../../services/noticias.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; // ✅ Importar

@Component({
  selector: 'app-noticia-detalle',
  imports: [CommonModule],
  templateUrl: './noticia-detalle.component.html',
  styleUrl: './noticia-detalle.component.css'
})
export class NoticiaDetalleComponent implements OnInit {
  noticia: any;
  cargando: boolean = true; // ✅ bandera para controlar el spinner

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargando = true;
      this.noticiasService.getNoticiaDetalle(id).subscribe(
        data => {
          this.noticia = data.article;
          this.cargando = false; // ✅ ocultar spinner al cargar
        },
        error => {
          console.error(error);
          this.cargando = false;
        }
      );
    }
  }

  volver() {
    this.location.back();
  }
}

