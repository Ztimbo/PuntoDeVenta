import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { ProductsDeleteComponent } from '../products-delete/products-delete.component';

@Component({
  selector: 'inventario-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public title: string = "Productos";

  public displayedColumns: string[] = ['name', 'description', 'priceBuy', 'priceSell', 'brand', 'provider', 'category', 'presentation', 'barCode', '-'];
  public dataSource: Product[] = [];

  constructor(
    public dialog: MatDialog,
    public readonly productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductsDeleteComponent, {
      width: '250px',
    });
  }

  public getProducts(): void {
    this.productsService.getProducts().subscribe((response: Product[]) => {
      this.dataSource = response;
    });
  }

}
