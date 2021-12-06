import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventario-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  public panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
