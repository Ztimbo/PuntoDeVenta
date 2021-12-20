import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inventario-purchase-calc',
  templateUrl: './purchase-calc.component.html',
  styleUrls: ['./purchase-calc.component.scss']
})
export class PurchaseCalcComponent implements OnInit {

  @Input() public total: number = 0;
  @Output() public guardarOrden = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public guardaOrden() {
    this.guardarOrden.emit('');
  }

}
