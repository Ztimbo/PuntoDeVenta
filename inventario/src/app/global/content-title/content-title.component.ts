import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inventario-content-title',
  templateUrl: './content-title.component.html',
  styleUrls: ['./content-title.component.scss']
})
export class ContentTitleComponent implements OnInit {

  @Input()
  public title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
