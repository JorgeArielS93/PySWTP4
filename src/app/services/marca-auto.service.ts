import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaAutoService {

  constructor(private _http: HttpClient) { 

  }

  public getMarcaAutos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'car-specs.p.rapidapi.com',
        'x-rapidapi-key': '3a04d021ffmsh03ee5a0436a527cp174762jsn7d1774f358de',
      }),
    };
    return this._http.get('https://car-specs.p.rapidapi.com/v2/cars/makes',httpOptions);
  }

  public getMarcaDetalle(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'car-specs.p.rapidapi.com',
        'x-rapidapi-key': '3a04d021ffmsh03ee5a0436a527cp174762jsn7d1774f358de',
      }),
    };
    return this._http.get(`https://car-specs.p.rapidapi.com/v2/cars/makes/${id}/models`, httpOptions);
  }
}
