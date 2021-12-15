import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-delete',
  templateUrl: './categories-delete.component.html',
  styleUrls: ['./categories-delete.component.scss']
})
export class CategoriesDeleteComponent implements OnInit {

  public title: string = "Eliminar Categoría";
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  constructor(
    public dialogRef: MatDialogRef<CategoriesDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {categoryId: number},
    private categoriesService: CategoriesService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public deleteCategory() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.categoriesService.deleteCategory(this.data.categoryId).subscribe(() => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Categoría eliminada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.onNoClick();
    });
  }

}
