import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Purchase } from '../../../interfaces/purchase';
import { PurchaseDetail } from '../../../interfaces/purchaseDetail';
import { PurchasesService } from '../../../services/purchases.service';

@Component({
  selector: 'app-purchase-new-container',
  templateUrl: './purchase-new-container.component.html',
  styleUrls: ['./purchase-new-container.component.scss']
})
export class PurchaseNewContainerComponent implements OnInit {

  public title: string = "Detalle de Compra";
  public total: number = 0;
  public purchase: Partial<Purchase> = {};
  public purchaseDetail: PurchaseDetail[] = [];
  public orderDate: Date = new Date();
  public orderStatus: string = 'en camino';

  constructor(
    private snackBar: MatSnackBar,
    private purchasesService: PurchasesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public printData($eventData: any): void {
    this.total = $eventData;
  }

  public getOrderDetail($eventData: any) {
    this.purchaseDetail = $eventData; 
  }

  public guardarOrden(): void {
    if(this.purchaseDetail?.length == 0 || this.purchaseDetail == undefined) {
      this.snackBar.open('La orden está vacía', 'Aceptar', { duration: 3000, panelClass: ['error-snack-bar'] });
      return;
    }
    
    this.purchase.orderDate = this.orderDate;
    this.purchase.status = this.orderStatus;
    this.purchase.total = this.total;

    this.purchasesService.savePurchase(this.purchase as Purchase).subscribe((response) => {
      this.purchaseDetail.forEach((item, index) => {
        item.purchasesId = response.id;
        this.purchasesService.savePurchaseDetail(item).subscribe();
      });

      this.snackBar.open('Orden guardada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/compras']);
    });
  }

}
