import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../interfaces/brand';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public getBrands(): Observable<Brand[]> {
    const url: string = environment.API_JSON_SERVER_URL + '/brands';
    return this._httpClient.get<Brand[]>(url);
  }

  public getBrand(brandId: number): Observable<Brand> {
    const url: string = environment.API_JSON_SERVER_URL + '/brands/' + brandId;
    return this._httpClient.get<Brand>(url);
  }

  public saveBrand(brand: Brand): Observable<Brand> {
    const url: string = environment.API_JSON_SERVER_URL + '/brands';
    return this._httpClient.post<Brand>(url, brand);
  }

  public updateBrand(brand: Brand): Observable<Brand> {
    const url: string = environment.API_JSON_SERVER_URL + '/brands/' + brand.id;
    return this._httpClient.patch<Brand>(url, brand);
  }

  public deleteBrand(brandId: number): Observable<Brand> {
    const url: string = environment.API_JSON_SERVER_URL + '/brands/' + brandId;
    return this._httpClient.delete<Brand>(url);
  }
}
