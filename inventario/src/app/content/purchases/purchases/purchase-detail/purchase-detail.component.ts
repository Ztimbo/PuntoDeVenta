import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/app/content/warehouse/products/interfaces/product';
import { ProductsService } from 'src/app/content/warehouse/products/services/products.service';
import { Provider } from '../../providers/interfaces/provider';
import { ProvidersService } from '../../providers/services/providers.service';
import {map, startWith} from 'rxjs/operators';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Aspirina', quantity: 1, price: 30},
  {position: 2, name: 'Omeprazol', quantity: 1, price: 20}
];

@Component({
  selector: 'inventario-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.scss']
})
export class PurchaseDetailComponent implements OnInit {

  public title: string = "Detalle de Compra";

  public filteredOptions: Observable<string[]> | undefined;
  public myControl: FormControl = new FormControl();

  public providers: Provider[] = [];
  public products: Product[] = [];

  public total: number = 0;

  @ViewChild('detailsTable') detailsTable: MatTable<Provider> | undefined;

  @Output() sendTotal = new EventEmitter<number>();

  displayedColumns: string[] = ['position', 'name', 'quantity', 'price', '-'];
  dataSource = ELEMENT_DATA;

  constructor(
    private providersService: ProvidersService,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProviders();
    this.getProducts();

    this.getTotal();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private getProviders(): void {
    this.providersService.getProviders().subscribe((response: Provider[]) => {
      this.providers = response;
    });
  }

  private getProducts(): void {
    this.productsService.getProducts().subscribe((response : Product[]) => {
      this.products = response;
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    let filteredProducts: Product[] = this.products.filter(product => product.name.toLowerCase().includes(filterValue));
    let filteredNameProducts: string[] = [];
    filteredProducts.forEach((product, index) => {
      filteredNameProducts.push(product.name);
    });
    return filteredNameProducts;
  }

  public incrementQuantity(purchaseItem: number): void {
    ELEMENT_DATA[purchaseItem].quantity += 1;
    this.detailsTable?.renderRows();
    this.getTotal();
  }

  public decrementQuantity(purchaseItem: number): void {
    if(ELEMENT_DATA[purchaseItem].quantity === 1) return;
    ELEMENT_DATA[purchaseItem].quantity -= 1;
    this.detailsTable?.renderRows();
    this.getTotal();
  }

  private getTotal(): void {
    this.total = 0;

    ELEMENT_DATA.forEach((product, index) => {
      this.total += (product.price * product.quantity);
    });

    this.sendTotal.emit(this.total);
  }

  public removeItem(indexRow: number): void {
    ELEMENT_DATA.splice(indexRow, 1);
    this.detailsTable?.renderRows();
    this.getTotal();
  }

}
