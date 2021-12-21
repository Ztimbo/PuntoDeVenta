import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Provider } from 'src/app/content/purchases/providers/interfaces/provider';
import { ProvidersService } from 'src/app/content/purchases/providers/services/providers.service';
import { Brand } from '../../../brands/interfaces/brand';
import { BrandsService } from '../../../brands/services/brands.service';
import { Category } from '../../../categories/interfaces/category';
import { CategoriesService } from '../../../categories/services/categories.service';
import { Presentation } from '../../../presentations/interfaces/presentation';
import { PresentationsService } from '../../../presentations/services/presentations.service';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {

  public title: string = 'Editar Producto';
  public loadingPage: HTMLElement = document.getElementById('loading-screen') as HTMLElement;

  public product: Partial<Product> = {};

  public editProducto: FormGroup = this.formBuilder.group({
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
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.getBrands();
    this.getProviders();
    this.getCategories();
    this.getPresentations();
    this.getProduct();
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

  private getProduct(): void {
    this.productsService.getProduct(this.getParams()).subscribe((response) => {
      this.product.id = response.id;
      this.product.name = response.name;
      this.product.description = response.description;
      this.product.quantity = response.quantity;
      this.product.priceBuy = response.priceBuy;
      this.product.priceSell = response.priceSell;
      this.product.brandsId = response.brandsId;
      this.product.providersId = response.providersId;
      this.product.categoriesId = response.categoriesId;
      this.product.presentationsId = response.presentationsId;
      this.product.barCode = response.barCode;

      this.editProducto.patchValue({
        producto: response.name,
        descripcion: response.description,
        cantidad: response.quantity,
        precioCompra: response.priceBuy,
        precioVenta: response.priceSell,
        marcaId: parseInt(response.brandsId.toString()),
        proveedorId: parseInt(response.providersId.toString()),
        categoriaId: parseInt(response.categoriesId.toString()),
        presentacionId: parseInt(response.presentationsId.toString()),
        codigoBarras: response.barCode
      });

      this.loadingPage.style.display = 'none';
    });
  }

  private getParams(): number {
    return parseInt(this.router.url.split("/")[3]);
  }

  public onSubmit(): void {
    if(this.loadingPage.style.display !== 'grid') this.loadingPage.style.display = 'grid';
    this.product.name = this.editProducto.value.producto;
    this.product.description = this.editProducto.value.descripcion;
    this.product.priceBuy = this.editProducto.value.precioCompra;
    this.product.priceSell = this.editProducto.value.precioVenta;
    this.product.brandsId = this.editProducto.value.marcaId;
    this.product.providersId = this.editProducto.value.proveedorId;
    this.product.categoriesId = this.editProducto.value.categoriaId;
    this.product.presentationsId = this.editProducto.value.presentacionId;
    this.product.barCode = this.editProducto.value.codigoBarras;

    this.productsService.updateProduct(this.product as Product).subscribe((response) => {
      this.loadingPage.style.display = 'none';
      this.snackBar.open('Producto ' + response.name +' actualizado', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
      this.router.navigate(['/productos']);
    });
  }

}
