import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    const url: string = environment.API_JSON_SERVER_URL + '/products?_expand=providers&_expand=brands&_expand=categories&_expand=presentations';
    return this._httpClient.get<Product[]>(url);
  }
}
