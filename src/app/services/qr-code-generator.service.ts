import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrCodeGeneratorService {
  constructor(private _http: HttpClient) {}

  public getQr(data: string, size: string): Observable<string> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'qr-code-generator20.p.rapidapi.com',
      'x-rapidapi-key': '3a04d021ffmsh03ee5a0436a527cp174762jsn7d1774f358de',
    });

    return this._http
      .get(`https://qr-code-generator20.p.rapidapi.com/generatebasicbase64?data=${encodeURIComponent(data)}&size=${size}`, {
        headers,
        responseType: 'text', // 👈 necesario para que Angular lo trate como texto plano
      })
      .pipe(
        map((base64: string) => `data:image/png;base64,${base64}`) // 👈 lo convertimos a un src usable en <img>
      );
  }
}
