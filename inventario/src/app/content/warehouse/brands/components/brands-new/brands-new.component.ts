import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Brand } from '../../interfaces/brand';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brands-new',
  templateUrl: './brands-new.component.html',
  styleUrls: ['./brands-new.component.scss']
})
export class BrandsNewComponent implements OnInit {

  public title: string = 'Nueva Marca';
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public marca: Partial<Brand> = {};

  public nuevaMarca: FormGroup = this.formBuilder.group({
    marca: new FormControl('', Validators.required),
    descripcion: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.marca.name = this.nuevaMarca.value.marca;
    this.marca.description = this.nuevaMarca.value.descripcion;

    this.brandsService.saveBrand(this.marca as Brand).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Marca ' + response.name +' creada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/marcas']);
    });
  }

}
