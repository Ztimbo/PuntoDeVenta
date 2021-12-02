import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {

  public title: string = 'Editar Producto';

  constructor() { }

  ngOnInit(): void {
  }

}
