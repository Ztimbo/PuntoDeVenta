import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProvidersModule } from './content/purchases/providers/app.module-providers';
import { BrandsModule } from './content/warehouse/brands/app.module-brands';
import { MenuModule } from './menu/app.module-menu';
import { ProductsModule } from './content/warehouse/products/app.module-products';
import { DashboardModule } from './content/dashboard/app.module-dashboard';
import { CategoriesModule } from './content/warehouse/categories/app.module-categories';
import { PresentationsModule } from './content/warehouse/presentations/app.module-presentations';
import { PurchasesModule } from './content/purchases/purchases/app.module-purchases';
import { SalesModule } from './content/sales/app.module-sales';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InventoryModule } from './content/warehouse/inventory/app.module-inventory';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProvidersModule,
    BrandsModule,
    MenuModule,
    ProductsModule,
    DashboardModule,
    CategoriesModule,
    PresentationsModule,
    PurchasesModule,
    SalesModule,
    MatProgressSpinnerModule,
    InventoryModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
