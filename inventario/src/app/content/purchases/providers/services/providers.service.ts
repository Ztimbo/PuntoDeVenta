import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../interfaces/provider';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public getProviders(): Observable<Provider[]> {
    const url: string = environment.API_JSON_SERVER_URL + '/providers';
    return this._httpClient.get<Provider[]>(url);
  }
}
