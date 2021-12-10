import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/app/content/warehouse/products/interfaces/product';
import { ProductsService } from 'src/app/content/warehouse/products/services/products.service';
import { Provider } from '../../../../providers/interfaces/provider';
import { ProvidersService } from '../../../../providers/services/providers.service';
import { map, startWith } from 'rxjs/operators';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Aspirina', quantity: 1, price: 30},
  {name: 'Omeprazol', quantity: 1, price: 20}
];

@Component({
  selector: 'inventario-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.scss']
})
export class PurchaseDetailComponent implements OnInit {

  public filteredOptions: Observable<string[]> | undefined;
  public myControl: FormControl = new FormControl();

  public providers: Provider[] = [];
  public products: Product[] = [];

  public total: number = 0;

  @ViewChild('detailsTable') detailsTable: MatTable<Provider> | undefined;
  @ViewChild('product') inputProduct: any;

  @Output() sendTotal = new EventEmitter<number>();

  displayedColumns: string[] = ['name', 'quantity', 'price', '-'];
  dataSource = ELEMENT_DATA;

  constructor(
    private providersService: ProvidersService,
    private productsService: ProductsService,
    private snackBar: MatSnackBar) { }

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
    this.snackBar.open(ELEMENT_DATA[indexRow].name +' eliminado de la orden', 'Aceptar', { duration: 3000, panelClass: ['info-snack-bar'] });
    ELEMENT_DATA.splice(indexRow, 1);
    this.detailsTable?.renderRows();
    this.getTotal();
  }

  public onChangeEvent($data: any) {
    let exists: boolean = false;
    let alreadyAdded: boolean = false;
    let productName: string = $data.option.value;

    exists = this.products.some(x => x.name === productName);
    alreadyAdded = ELEMENT_DATA.some(x => x.name === productName);

    if(exists && !alreadyAdded) {
      let orderProduct = this.products.filter(x => x.name === productName)[0];
      ELEMENT_DATA.push({ name: orderProduct.name, quantity: 1, price: orderProduct.priceBuy });
      this.detailsTable?.renderRows();
    }

    if(!exists) this.snackBar.open('El producto no existe', 'Aceptar', { duration: 3000, panelClass: ['error-snack-bar'] });
    if(alreadyAdded) this.snackBar.open('El producto ya existe en la orden', 'Aceptar', { duration: 3000, panelClass: ['error-snack-bar'] });

    this.inputProduct.nativeElement.value = '';
  }

}
