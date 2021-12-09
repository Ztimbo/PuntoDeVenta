import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inventario-purchase-calc',
  templateUrl: './purchase-calc.component.html',
  styleUrls: ['./purchase-calc.component.scss']
})
export class PurchaseCalcComponent implements OnInit {

  @Input() public total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
