import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { SalesDetail } from '../../interfaces/salesDetail';

const ELEMENT_DATA: SalesDetail[] = [
  { productsId: 1, name: 'Omeprazol', quantity: 10, price: 50, salesId: 0 },
  { productsId: 1, name: 'Omeprazol', quantity: 10, price: 50, salesId: 0 },
  { productsId: 1, name: 'Omeprazol', quantity: 10, price: 50, salesId: 0 },
  { productsId: 1, name: 'Omeprazol', quantity: 10, price: 50, salesId: 0 },
  { productsId: 1, name: 'Omeprazol', quantity: 10, price: 50, salesId: 0 },
  { productsId: 1, name: 'Omeprazol', quantity: 10, price: 50, salesId: 0 }
];

@Component({
  selector: 'app-sales-new',
  templateUrl: './sales-new.component.html',
  styleUrls: ['./sales-new.component.scss']
})
export class SalesNewComponent implements OnInit {

  public title: string = "Nueva Venta";

  @ViewChild('detailsTable') detailsTable: MatTable<SalesDetail> | undefined;

  displayedColumns: string[] = ['name', 'quantity', 'price', '-'];
  dataSource = ELEMENT_DATA;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public incrementQuantity(purchaseItem: number): void {
    ELEMENT_DATA[purchaseItem].quantity += 1;
    //this.detailsTable?.renderRows();
    //this.getTotal();
    //this.sendDetail.emit(ELEMENT_DATA);
  }

  public decrementQuantity(purchaseItem: number): void {
    if(ELEMENT_DATA[purchaseItem].quantity === 1) return;
    ELEMENT_DATA[purchaseItem].quantity -= 1;
    //this.detailsTable?.renderRows();
    //this.getTotal();
    //this.sendDetail.emit(ELEMENT_DATA);
  }

  public removeItem(indexRow: number): void {
    this.snackBar.open(ELEMENT_DATA[indexRow].name +' eliminado de la orden', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
    ELEMENT_DATA.splice(indexRow, 1);
    this.detailsTable?.renderRows();
    //this.getTotal();
    //this.sendDetail.emit(ELEMENT_DATA);
  }

}
