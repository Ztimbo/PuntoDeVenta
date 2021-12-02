import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss']
})
export class ProductsNewComponent implements OnInit {

  public title: string = 'Nuevo Producto';

  constructor() { }

  ngOnInit(): void {
  }

}
