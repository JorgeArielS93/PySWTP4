import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto-c',
  imports: [CommonModule,FormsModule],
  templateUrl: './punto-c.component.html',
  styleUrl: './punto-c.component.css'
})
export class PuntoCComponent implements OnInit{
  monedas: any[] = [];
  from!:string;
  to!:string;
  amount!:string;
  conversion: number | null = null;
  monedaConvertida: string = ''; // ✅ la moneda usada al momento de la conversión


  ngOnInit(): void {
    this.obtenerMonedas();
  }

  constructor(private cambioService:CurrencyService){
  }

  obtenerMonedas() {
  this.cambioService.getCurrencies().subscribe(
    result => {
      this.monedas = Object.entries(result.currencies).map(([codigo, nombre]) => ({
        codigo,
        nombre
      }));
      console.log(this.monedas);
    },
    error => {
      console.log(error);
    }
  );
}
  obtenerConversion() {
  this.cambioService.getConvert(this.from, this.to, this.amount).subscribe(
    (result: any) => {
      console.log(result);
      this.conversion = result.result;
      this.monedaConvertida = this.to; // ✅ guardamos la moneda usada
    },
    error => {
      console.log(error);
    }
  );
}

}