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

  public getProvider(providerId: number): Observable<Provider> {
    const url: string = environment.API_JSON_SERVER_URL + '/providers/' + providerId;
    return this._httpClient.get<Provider>(url);
  }

  public saveProvider(provider: Provider): Observable<Provider> {
    const url: string = environment.API_JSON_SERVER_URL + '/providers';
    return this._httpClient.post<Provider>(url, provider);
  }

  public updateProvider(provider: Provider): Observable<Provider> {
    const url: string = environment.API_JSON_SERVER_URL + '/providers/' + provider.id;
    return this._httpClient.patch<Provider>(url, provider);
  }

  public deleteProvider(providerId: number): Observable<Provider> {
    const url: string = environment.API_JSON_SERVER_URL + '/providers/' + providerId;
    return this._httpClient.delete<Provider>(url);
  }
}
