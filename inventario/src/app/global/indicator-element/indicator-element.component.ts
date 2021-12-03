import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inventario-indicator-element',
  templateUrl: './indicator-element.component.html',
  styleUrls: ['./indicator-element.component.scss']
})
export class IndicatorElementComponent implements OnInit {

  @Input()
  public color: string = '';

  @Input()
  public icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
