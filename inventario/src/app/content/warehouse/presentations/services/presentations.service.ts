import { Injectable } from '@angular/core';
import { Presentation } from '../interfaces/presentation';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentationsService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public getPresentations(): Observable<Presentation[]> {
    const url: string = environment.API_JSON_SERVER_URL + '/presentations';
    return this._httpClient.get<Presentation[]>(url);
  }
}
