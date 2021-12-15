import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';
import { CategoriesDeleteComponent } from '../categories-delete/categories-delete.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  public title: string = "Categorías";

  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;
  @ViewChild('categoriesTable') detailsTable: MatTable<Category> | undefined;

  public displayedColumns: string[] = ['name', 'description', '-'];
  public dataSource: Category[] = [];

  constructor(
    public dialog: MatDialog,
    public readonly categoryService: CategoriesService
    ) { }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(CategoriesDeleteComponent, {
      width: '250px',
      data: { categoryId: id }
    }).afterClosed().subscribe(() => {
      this.getBrands();
      this.detailsTable?.renderRows();
    });
  }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getBrands();
  }

  public getBrands(): void {
    this.categoryService.getCategories().subscribe((response: Category[]) => {
      this.dataSource = response;
      this.loadingPage.style.display = 'none';
    });
  }

}
