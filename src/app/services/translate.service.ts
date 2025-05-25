import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor(private _http: HttpClient) {}
  public getLanguajes(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
        'x-rapidapi-key': '3a04d021ffmsh03ee5a0436a527cp174762jsn7d1774f358de',
      }),
    };
    return this._http.get('https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages',httpOptions);
  }
  public translateText(
    source: string,
    target: string,
    text: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
        'x-rapidapi-key': '3a04d021ffmsh03ee5a0436a527cp174762jsn7d1774f358de',
      }),
    };
    const body = JSON.stringify({
      from: source,
      to: target,
      text: text,
    });
    return this._http.post('https://google-translate113.p.rapidapi.com/api/v1/translator/text',body,httpOptions);
  }
}
