import { Component, OnInit } from '@angular/core';
import { MarcaAutoService } from '../../services/marca-auto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto-b',
  imports: [CommonModule],
  templateUrl: './punto-b.component.html',
  styleUrl: './punto-b.component.css'
})
export class PuntoBComponent implements OnInit {
  marcas: any[] = [];
  modelos: any[] = [];
  cargando: boolean = true;
  cargandoModelos: boolean = false;
  marcaSeleccionada: string = '';

  constructor(private autosService: MarcaAutoService) {}

  ngOnInit(): void {
    this.obtenerMarcas();
  }

  obtenerMarcas() {
    this.autosService.getMarcaAutos().subscribe(
      result => {
        this.marcas = result;
        this.cargando = false;
      },
      error => {
        console.log(error);
        this.cargando = false;
      }
    );
  }

  abrirModal(marca: any) {
    this.marcaSeleccionada = marca.name;
    this.cargandoModelos = true;
    this.modelos = [];

    this.autosService.getMarcaDetalle(marca.id).subscribe(
      res => {
        this.modelos = res;
        this.cargandoModelos = false;
        const modal = new (window as any).bootstrap.Modal(document.getElementById('modelosModal'));
        modal.show();
      },
      err => {
        console.error(err);
        this.cargandoModelos = false;
      }
    );
  }
}
