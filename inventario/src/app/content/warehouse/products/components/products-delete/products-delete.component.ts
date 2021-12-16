import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.scss']
})
export class ProductsDeleteComponent implements OnInit {

  public title: string = "Eliminar Producto";
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  constructor(
    public dialogRef: MatDialogRef<ProductsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {productId: number},
    private productsService: ProductsService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public deleteProduct() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.productsService.deleteProduct(this.data.productId).subscribe(() => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Producto eliminado', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.onNoClick();
    });
  }

}
