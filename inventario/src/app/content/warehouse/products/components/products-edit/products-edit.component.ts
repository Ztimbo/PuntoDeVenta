import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/content/purchases/providers/interfaces/provider';
import { ProvidersService } from 'src/app/content/purchases/providers/services/providers.service';
import { Brand } from '../../../brands/interfaces/brand';
import { BrandsService } from '../../../brands/services/brands.service';
import { Category } from '../../../categories/interfaces/category';
import { CategoriesService } from '../../../categories/services/categories.service';
import { Presentation } from '../../../presentations/interfaces/presentation';
import { PresentationsService } from '../../../presentations/services/presentations.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {

  public title: string = 'Editar Producto';

  public brands: Brand[] = [];
  public providers: Provider[] = [];
  public categories: Category[] = [];
  public presentations: Presentation[] = [];

  constructor(
    private readonly brandsService: BrandsService,
    private readonly providersService: ProvidersService,
    private readonly categoriesService: CategoriesService,
    private readonly presentationsService: PresentationsService) { }

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

}
