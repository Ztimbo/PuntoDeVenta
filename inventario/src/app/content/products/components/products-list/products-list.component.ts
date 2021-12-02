import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../interfaces/product';
import { ProductsDeleteComponent } from '../products-delete/products-delete.component';

@Component({
  selector: 'inventario-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public title: string = "Productos";
  public ELEMENT_DATA: Product[] = [
    { productId: 1, name: 'Aspirina', description: '', price: 50 },
    { productId: 2, name: 'Omeprazol', description: '', price: 60 },
    { productId: 3, name: 'Broxol', description: '', price: 70 },
    { productId: 4, name: 'Amoxicilina', description: '', price: 55 }
  ];

  displayedColumns: string[] = ['name', 'description', 'price', '-'];
  dataSource = this.ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductsDeleteComponent, {
      width: '250px',
    });
  }

}
