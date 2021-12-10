import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-new-container',
  templateUrl: './purchase-new-container.component.html',
  styleUrls: ['./purchase-new-container.component.scss']
})
export class PurchaseNewContainerComponent implements OnInit {

  public title: string = "Detalle de Compra";
  public total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public printData($eventData: any): void {
    this.total = $eventData;
  }

}
