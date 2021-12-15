import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Brand } from '../../interfaces/brand';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'inventario-brands-edit',
  templateUrl: './brands-edit.component.html',
  styleUrls: ['./brands-edit.component.scss']
})
export class BrandsEditComponent implements OnInit {

  public title: string = 'Editar Marca';
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public brand: Partial<Brand> = {};

  public editBrand: FormGroup = this.formBuilder.group({
    marca: new FormControl('', Validators.required),
    descripcion: new FormControl()
  });

  constructor(
    private brandsService: BrandsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getBrand();
  }

  private getBrand(): void {
    this.brandsService.getBrand(this.getParams()).subscribe((response) => {
      this.brand.id = response.id;
      this.brand.name = response.name;
      this.brand.description = response.description;

      this.editBrand.patchValue({
        marca: response.name,
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
    this.brand.name = this.editBrand.value.marca;
    this.brand.description = this.editBrand.value.descripcion;

    this.brandsService.updateBrand(this.brand as Brand).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Marca ' + response.name +' actualizada', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/marcas']);
    });
  }

}
