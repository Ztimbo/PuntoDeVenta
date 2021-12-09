import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  public displayedColumns: string[] = ['name', 'description', '-'];
  public dataSource: Category[] = [];

  constructor(
    public dialog: MatDialog,
    public readonly categoryService: CategoriesService
    ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoriesDeleteComponent, {
      width: '250px',
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
