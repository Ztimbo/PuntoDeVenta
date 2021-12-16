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

  public getProduct(productId: number): Observable<Product> {
    const url: string = environment.API_JSON_SERVER_URL + '/products/' + productId + '?_expand=providers&_expand=brands&_expand=categories&_expand=presentations';
    return this._httpClient.get<Product>(url);
  }

  public saveProduct(product: Product): Observable<Product> {
    const url: string = environment.API_JSON_SERVER_URL + '/products';
    return this._httpClient.post<Product>(url, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    const url: string = environment.API_JSON_SERVER_URL + '/products/' + product.id;
    return this._httpClient.patch<Product>(url, product);
  }

  public deleteProduct(productId: number): Observable<Product> {
    const url: string = environment.API_JSON_SERVER_URL + '/products/' + productId;
    return this._httpClient.delete<Product>(url);
  }
}
