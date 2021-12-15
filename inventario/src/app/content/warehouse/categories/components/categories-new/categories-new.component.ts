import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-new',
  templateUrl: './categories-new.component.html',
  styleUrls: ['./categories-new.component.scss']
})
export class CategoriesNewComponent implements OnInit {

  public title: string = 'Nueva Categoría';

  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public categoria: Partial<Category> = {};

  public nuevaCategoria: FormGroup = this.formBuilder.group({
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.categoria.name = this.nuevaCategoria.value.categoria;
    this.categoria.description = this.nuevaCategoria.value.descripcion;

    this.categoriesService.saveCategory(this.categoria as Category).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Categoría ' + response.name +' creada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/categorias']);
    });
  }

}
