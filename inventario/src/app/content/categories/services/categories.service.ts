import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public getCategories(): Observable<Category[]> {
    const url: string = environment.API_JSON_SERVER_URL + '/categories';
    return this._httpClient.get<Category[]>(url);
  }
}
