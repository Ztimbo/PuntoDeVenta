import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
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

  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;
  @ViewChild('productsTable') detailsTable: MatTable<Product> | undefined;

  public displayedColumns: string[] = ['name', 'description', 'priceBuy', 'priceSell', 'brand', 'provider', 'category', 'presentation', 'barCode', '-'];
  public dataSource: Product[] = [];

  constructor(
    public dialog: MatDialog,
    public readonly productsService: ProductsService
    ) { }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getProducts();
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ProductsDeleteComponent, {
      width: '250px',
      data: { productId: id }
    }).afterClosed().subscribe(() => {
      this.getProducts();
      this.detailsTable?.renderRows();
    });
  }

  public getProducts(): void {
    this.productsService.getProducts().subscribe((response: Product[]) => {
      this.dataSource = response;
      this.loadingPage.style.display = 'none';
    });
  }

}
