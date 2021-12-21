import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/content/warehouse/brands/interfaces/brand';
import { BrandsService } from 'src/app/content/warehouse/brands/services/brands.service';
import { Category } from 'src/app/content/warehouse/categories/interfaces/category';
import { CategoriesService } from 'src/app/content/warehouse/categories/services/categories.service';
import { Presentation } from 'src/app/content/warehouse/presentations/interfaces/presentation';
import { PresentationsService } from 'src/app/content/warehouse/presentations/services/presentations.service';
import { Provider } from 'src/app/content/purchases/providers/interfaces/provider';
import { ProvidersService } from 'src/app/content/purchases/providers/services/providers.service';
import { Product } from '../../interfaces/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss']
})
export class ProductsNewComponent implements OnInit {

  public title: string = 'Nuevo Producto';
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public producto: Partial<Product> = {};

  public nuevoProducto: FormGroup = this.formBuilder.group({
    producto: new FormControl('', Validators.required),
    descripcion: new FormControl(),
    cantidad: new FormControl('', Validators.required),
    precioCompra: new FormControl('', Validators.required),
    precioVenta: new FormControl('', Validators.required),
    marcaId: new FormControl(),
    proveedorId: new FormControl(),
    categoriaId: new FormControl(),
    presentacionId: new FormControl(),
    codigoBarras: new FormControl('', Validators.required)
  });

  public brands: Brand[] = [];
  public providers: Provider[] = [];
  public categories: Category[] = [];
  public presentations: Presentation[] = [];

  constructor(
    private readonly brandsService: BrandsService,
    private readonly providersService: ProvidersService,
    private readonly categoriesService: CategoriesService,
    private readonly presentationsService: PresentationsService,
    private readonly productsService: ProductsService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getProviders();
    this.getCategories();
    this.getPresentations();
  }

  private getBrands(): void {
    this.brandsService.getBrands().subscribe((response): void => {
      this.brands = response;
    });
  }

  private getProviders(): void {
    this.providersService.getProviders().subscribe((response): void => {
      this.providers = response;
    });
  }

  private getCategories(): void {
    this.categoriesService.getCategories().subscribe((response): void => {
      this.categories = response
    });
  }

  private getPresentations(): void {
    this.presentationsService.getPresentations().subscribe((response: Presentation[]): void => {
      this.presentations = response;
    });
  }

  onSubmit() {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.producto.name = this.nuevoProducto.value.producto;
    this.producto.description = this.nuevoProducto.value.descripcion;
    this.producto.quantity = this.nuevoProducto.value.cantidad;
    this.producto.priceBuy = this.nuevoProducto.value.precioCompra;
    this.producto.priceSell = this.nuevoProducto.value.precioVenta;
    this.producto.brandsId = this.nuevoProducto.value.marcaId;
    this.producto.providersId = this.nuevoProducto.value.proveedorId;
    this.producto.categoriesId = this.nuevoProducto.value.categoriaId;
    this.producto.presentationsId = this.nuevoProducto.value.presentacionId;
    this.producto.barCode = this.nuevoProducto.value.codigoBarras;

    this.productsService.saveProduct(this.producto as Product).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Producto ' + response.name +' creado', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/productos']);
    });
  }

}
