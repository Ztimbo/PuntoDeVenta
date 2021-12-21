import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from 'src/app/content/warehouse/products/interfaces/product';
import { ProductsService } from 'src/app/content/warehouse/products/services/products.service';
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
    private readonly productsService: ProductsService,
    private router: Router,
    private snackBar: MatSnackBar
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

  public compeltePurchase() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.purchase.status = 'completa';

    this.purchasesService.updatePurchase(this.purchase as Purchase).subscribe((response: Purchase) => {

      this.dataSource.forEach((item, index) => {
        let product: Product | undefined;
        
        this.productsService.getProduct(item.productsId).subscribe((response) => {
          product = response;
          product.quantity += item.quantity;

          this.productsService.updateProduct(product).subscribe();
        });
      });

      this.loadingPage.style.display = 'none';
      this.snackBar.open('Compra completada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/compras']);
    });
  }

  public cancelPurchase() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.purchase.status = 'cancelada';

    this.purchasesService.updatePurchase(this.purchase as Purchase).subscribe((response: Purchase) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Compra cancelada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/compras']);
    });
  }

}
