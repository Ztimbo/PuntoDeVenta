import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from '../interfaces/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public getPurchases(): Observable<Purchase[]> {
    const url: string = environment.API_JSON_SERVER_URL + '/purchases';
    return this._httpClient.get<Purchase[]>(url);
  }
}
