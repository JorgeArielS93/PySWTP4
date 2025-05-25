import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _http: HttpClient) { 
  }

  public getCurrencies(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'apikey': 'fVCNQSIKkFN3lifleDgP2dnsMAg6fA9q'
      }),
    };
    return this._http.get(`https://api.apilayer.com/currency_data/list`,httpOptions);
  }

  public getConvert(from: string, to: string, amount: string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'apikey': 'fVCNQSIKkFN3lifleDgP2dnsMAg6fA9q'
    }),
  };
  return this._http.get(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,httpOptions);
}

}
