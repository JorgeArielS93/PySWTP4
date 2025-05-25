import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http: HttpClient) { }

   public getNews(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'livescore6.p.rapidapi.com',
        'x-rapidapi-key': '3a04d021ffmsh03ee5a0436a527cp174762jsn7d1774f358de',
      }),
    };
    return this._http.get('https://livescore6.p.rapidapi.com/news/v2/list',httpOptions);
  }

  public getNoticiaDetalle(id: string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'livescore6.p.rapidapi.com',
      'x-rapidapi-key': '3a04d021ffmsh03ee5a0436a527cp174762jsn7d1774f358de',
    }),
  };
  return this._http.get(`https://livescore6.p.rapidapi.com/news/v2/detail?id=${id}`, httpOptions);
}

}
