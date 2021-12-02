import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsContainerComponent } from './content/brands/components/brands-container/brands-container.component';
import { BrandsEditComponent } from './content/brands/components/brands-edit/brands-edit.component';
import { BrandsListComponent } from './content/brands/components/brands-list/brands-list.component';
import { BrandsNewComponent } from './content/brands/components/brands-new/brands-new.component';
import { ProductsContainerComponent } from './content/products/components/products-container/products-container.component';
import { ProductsEditComponent } from './content/products/components/products-edit/products-edit.component';
import { ProductsListComponent } from './content/products/components/products-list/products-list.component';
import { ProductsNewComponent } from './content/products/components/products-new/products-new.component';
import { ProvidersContainerComponent } from './content/providers/components/providers-container/providers-container.component';
import { ProvidersEditComponent } from './content/providers/components/providers-edit/providers-edit.component';
import { ProvidersListComponent } from './content/providers/components/providers-list/providers-list.component';
import { ProvidersNewComponent } from './content/providers/components/providers-new/providers-new.component';

const routes: Routes = [
  { path: 'proveedores', component: ProvidersContainerComponent, children: [
    { path: '', component: ProvidersListComponent },
    { path: 'nuevo', component: ProvidersNewComponent },
    { path: 'editar/:providerId', component: ProvidersEditComponent }
  ] },
  { path: 'marcas', component: BrandsContainerComponent, children: [
    { path: '', component: BrandsListComponent },
    { path: 'nuevo', component: BrandsNewComponent },
    { path: 'editar/:brandId', component: BrandsEditComponent }
  ] },
  { path: 'productos', component: ProductsContainerComponent, children: [
    { path: '', component: ProductsListComponent },
    { path: 'nuevo', component: ProductsNewComponent },
    { path: 'editar/:productId', component: ProductsEditComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
