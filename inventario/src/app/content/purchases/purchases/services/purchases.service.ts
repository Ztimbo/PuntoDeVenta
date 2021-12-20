import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from '../interfaces/purchase';
import { PurchaseDetail } from '../interfaces/purchaseDetail';

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

  public getPurchase(purchaseId: number): Observable<Purchase> {
    const url: string = environment.API_JSON_SERVER_URL + '/purchases/' + purchaseId;
    return this._httpClient.get<Purchase>(url);
  }

  public savePurchase(purchase: Purchase): Observable<Purchase> {
    const url: string = environment.API_JSON_SERVER_URL + '/purchases';
    return this._httpClient.post<Purchase>(url, purchase);
  }

  public updatePurchase(purchase: Purchase): Observable<Purchase> {
    const url: string = environment.API_JSON_SERVER_URL + '/purchases/' + purchase.id;
    return this._httpClient.patch<Purchase>(url, purchase);
  }

  public getPurchaseDetail(purchaseId: number): Observable<PurchaseDetail> {
    const url: string = environment.API_JSON_SERVER_URL + '/purchase-detail?_expand=products&purchasesId=' + purchaseId;
    return this._httpClient.get<any>(url);
  }

  public savePurchaseDetail(purchaseDetail: PurchaseDetail): Observable<PurchaseDetail> {
    const url: string = environment.API_JSON_SERVER_URL + '/purchase-detail';
    return this._httpClient.post<any>(url, purchaseDetail);
  }
}
