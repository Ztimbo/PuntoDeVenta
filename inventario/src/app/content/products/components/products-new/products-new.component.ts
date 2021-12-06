import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/content/brands/interfaces/brand';
import { BrandsService } from 'src/app/content/brands/services/brands.service';
import { Category } from 'src/app/content/categories/interfaces/category';
import { CategoriesService } from 'src/app/content/categories/services/categories.service';
import { Presentation } from 'src/app/content/presentations/interfaces/presentation';
import { PresentationsService } from 'src/app/content/presentations/services/presentations.service';
import { Provider } from 'src/app/content/providers/interfaces/provider';
import { ProvidersService } from 'src/app/content/providers/services/providers.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss']
})
export class ProductsNewComponent implements OnInit {

  public title: string = 'Nuevo Producto';

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
    this.presentationsService.getPresentations().subscribe((response): void => {
      this.presentations = response;
    });
  }

}
