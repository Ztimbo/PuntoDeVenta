import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Purchase } from '../../interfaces/purchase';
import { PurchaseDetail } from '../../interfaces/purchaseDetail';
import { PurchasesService } from '../../services/purchases.service';

@Component({
  selector: 'app-purchases-detail',
  templateUrl: './purchases-detail.component.html',
  styleUrls: ['./purchases-detail.component.scss']
})
export class PurchasesDetailComponent implements OnInit {

  public title: string = "Detalle de Compra °" + this.getParams();
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public displayedColumns: string[] = ['product', 'quantity', 'price', 'total'];
  public dataSource: PurchaseDetail[] = [];

  public purchase: Partial<Purchase> = {};

  constructor(
    public dialog: MatDialog,
    private readonly purchasesService: PurchasesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getPurchase();
    this.getPurchaseDetail();
  }

  private getParams(): number {
    return parseInt(this.router.url.split("/")[3]);
  }

  private getPurchase() {
    this.purchasesService.getPurchase(this.getParams()).subscribe((response: Purchase) => {
      this.purchase = response;
    });
  }

  private getPurchaseDetail() {
    this.purchasesService.getPurchaseDetail(this.getParams()).subscribe((response: any) => {
      this.dataSource = response;
      this.loadingPage.style.display = 'none';
    });
  }

}
