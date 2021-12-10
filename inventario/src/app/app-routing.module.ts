import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsContainerComponent } from './content/warehouse/brands/components/brands-container/brands-container.component';
import { BrandsEditComponent } from './content/warehouse/brands/components/brands-edit/brands-edit.component';
import { BrandsListComponent } from './content/warehouse/brands/components/brands-list/brands-list.component';
import { BrandsNewComponent } from './content/warehouse/brands/components/brands-new/brands-new.component';
import { CategoriesContainerComponent } from './content/warehouse/categories/components/categories-container/categories-container.component';
import { CategoriesEditComponent } from './content/warehouse/categories/components/categories-edit/categories-edit.component';
import { CategoriesListComponent } from './content/warehouse/categories/components/categories-list/categories-list.component';
import { CategoriesNewComponent } from './content/warehouse/categories/components/categories-new/categories-new.component';
import { PrincipalDashboardComponent } from './content/dashboard/components/principal-dashboard/principal-dashboard.component';
import { PresentationsContainerComponent } from './content/warehouse/presentations/components/presentations-container/presentations-container.component';
import { PresentationsEditComponent } from './content/warehouse/presentations/components/presentations-edit/presentations-edit.component';
import { PresentationsListComponent } from './content/warehouse/presentations/components/presentations-list/presentations-list.component';
import { PresentationsNewComponent } from './content/warehouse/presentations/components/presentations-new/presentations-new.component';
import { ProductsContainerComponent } from './content/warehouse/products/components/products-container/products-container.component';
import { ProductsEditComponent } from './content/warehouse/products/components/products-edit/products-edit.component';
import { ProductsListComponent } from './content/warehouse/products/components/products-list/products-list.component';
import { ProductsNewComponent } from './content/warehouse/products/components/products-new/products-new.component';
import { ProvidersContainerComponent } from './content/purchases/providers/components/providers-container/providers-container.component';
import { ProvidersEditComponent } from './content/purchases/providers/components/providers-edit/providers-edit.component';
import { ProvidersListComponent } from './content/purchases/providers/components/providers-list/providers-list.component';
import { ProvidersNewComponent } from './content/purchases/providers/components/providers-new/providers-new.component';
import { PurchasesContainerComponent } from './content/purchases/purchases/components/purchases-container/purchases-container.component';
import { SalesContainerComponent } from './content/sales/components/sales-container/sales-container.component';
import { PurchasesListComponent } from './content/purchases/purchases/components/purchases-list/purchases-list.component';
import { PurchaseNewContainerComponent } from './content/purchases/purchases/components/purchases-new/purchase-new-container/purchase-new-container.component';
import { PurchasesDetailComponent } from './content/purchases/purchases/components/purchases-detail/purchases-detail.component';

const routes: Routes = [
  { path: '', component: PrincipalDashboardComponent },
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
  ] },
  { path: 'categorias', component: CategoriesContainerComponent, children: [
    { path: '', component: CategoriesListComponent },
    { path: 'nuevo', component: CategoriesNewComponent },
    { path: 'editar/:categoryId', component: CategoriesEditComponent }
  ] },
  { path: 'presentaciones', component: PresentationsContainerComponent, children: [
    { path: '', component: PresentationsListComponent },
    { path: 'nuevo', component: PresentationsNewComponent },
    { path: 'editar/:presentationId', component: PresentationsEditComponent }
  ] },
  { path: 'compras', component: PurchasesContainerComponent, children: [
    { path: '', component: PurchasesListComponent },
    { path: 'nuevo', component: PurchaseNewContainerComponent },
    { path: 'detalle/:purchaseId', component: PurchasesDetailComponent }
  ] },
  { path: 'ventas', component: SalesContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
