import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-traductor',
  imports: [CommonModule,FormsModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css'
})
export class TraductorComponent implements OnInit{
  // constante para almacenar los lenguajes
  lenguajes: any[] = [];
  from!:string;
  to!:string;
  text!:string;
  transcribedText!:string;
  ngOnInit(): void {
    // Llamamos a obtenerLenguajes() cuando el componente se inicializa
    this.obtenerLenguajes();
  }

  constructor(private translateService:TranslateService){

  }

  obtenerLenguajes() {
    this.translateService.getLanguajes().subscribe(
      result => {
        // Almacenamos el resultado en la propiedad lenguajes
        this.lenguajes = result;
        console.log(this.lenguajes);
      },
      error => {
        console.log(error);
      }
    );
  }

  traducirTexto(){
    this.translateService.translateText(this.from,this.to,this.text).subscribe(
      (result:any)=>{
        console.log(result);
        this.transcribedText=result.trans;
      },
      error => {
        console.log(error);
      }
    )
  }

}
