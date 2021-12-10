import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Purchase } from '../../interfaces/purchase';
import { PurchasesService } from '../../services/purchases.service';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {

  public title: string = "Compras";

  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public displayedColumns: string[] = ['orderId', 'orderDate', 'total', 'status', '-'];
  public dataSource: Purchase[] = [];

  constructor(
    public dialog: MatDialog,
    private readonly purchasesService: PurchasesService
  ) { }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getPurchases();
  }

  private getPurchases(): void {
    this.purchasesService.getPurchases().subscribe((response: Purchase[]) => {
      this.dataSource = response;
      this.loadingPage.style.display = 'none';
    });
  }

}
