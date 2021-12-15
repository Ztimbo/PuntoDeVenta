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

  public getCategory(categoryId: number): Observable<Category> {
    const url: string = environment.API_JSON_SERVER_URL + '/categories/' + categoryId;
    return this._httpClient.get<Category>(url);
  }

  public saveCategory(category: Category): Observable<Category> {
    const url: string = environment.API_JSON_SERVER_URL + '/categories';
    return this._httpClient.post<Category>(url, category);
  }

  public updateCategory(category: Category): Observable<Category> {
    const url: string = environment.API_JSON_SERVER_URL + '/categories/' + category.id;
    return this._httpClient.patch<Category>(url, category);
  }

  public deleteCategory(categoryId: number): Observable<Category> {
    const url: string = environment.API_JSON_SERVER_URL + '/categories/' + categoryId;
    return this._httpClient.delete<Category>(url);
  }
}
