import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brands-delete',
  templateUrl: './brands-delete.component.html',
  styleUrls: ['./brands-delete.component.scss']
})
export class BrandsDeleteComponent implements OnInit {

  public title: string = "Eliminar Marca";
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  constructor(
    public dialogRef: MatDialogRef<BrandsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {brandId: number},
    private brandsService: BrandsService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public deleteBrand() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.brandsService.deleteBrand(this.data.brandId).subscribe(() => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Marca eliminada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.onNoClick();
    });
  }

}
