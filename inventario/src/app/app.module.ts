import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProvidersModule } from './content/providers/app.module-providers';
import { BrandsModule } from './content/brands/app.module-brands';
import { MenuModule } from './menu/app.module-menu';
import { ProductsModule } from './content/products/app.module-products';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProvidersModule,
    BrandsModule,
    MenuModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
