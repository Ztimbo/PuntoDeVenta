import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.scss']
})
export class CategoriesEditComponent implements OnInit {

  public title: string = 'Editar Categoría';

  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public category: Partial<Category> = {};

  public editCategory: FormGroup = this.formBuilder.group({
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl()
  });

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getCategory();
  }

  private getCategory(): void {
    this.categoriesService.getCategory(this.getParams()).subscribe((response) => {
      this.category.id = response.id;
      this.category.name = response.name;
      this.category.description = response.description;

      this.editCategory.patchValue({
        categoria: response.name,
        descripcion: response.description
      });

      this.loadingPage.style.display = 'none';
    });
  }

  private getParams(): number {
    return parseInt(this.router.url.split("/")[3]);
  }

  public onSubmit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.category.name = this.editCategory.value.categoria;
    this.category.description = this.editCategory.value.descripcion;

    this.categoriesService.updateCategory(this.category as Category).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Categoría ' + response.name +' actualizada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/categorias']);
    });
  }

}
