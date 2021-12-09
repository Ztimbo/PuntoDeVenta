import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventario-purchases-container',
  templateUrl: './purchases-container.component.html',
  styleUrls: ['./purchases-container.component.scss']
})
export class PurchasesContainerComponent implements OnInit {

  public total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public printData($eventData: any): void {
    this.total = $eventData;
  }

}
