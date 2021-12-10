import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../interfaces/purchase';
import { PurchasesService } from '../../services/purchases.service';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {

  public title: string = "Compras";

  public purchases: Purchase[] = [];

  constructor(
    private readonly purchasesService: PurchasesService
  ) { }

  ngOnInit(): void {
    this.getPurchases();
  }

  private getPurchases(): void {
    this.purchasesService.getPurchases().subscribe((response: Purchase[]) => {
      this.purchases = response;
    });
  }

}
