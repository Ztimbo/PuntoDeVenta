import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { AppRoutingModule } from "src/app/app-routing.module";
import { GlobalModule } from "src/app/global/app.module-global";
import { ProductsContainerComponent } from "./components/products-container/products-container.component";
import { ProductsDeleteComponent } from "./components/products-delete/products-delete.component";
import { ProductsEditComponent } from "./components/products-edit/products-edit.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductsNewComponent } from "./components/products-new/products-new.component";

@NgModule({
    declarations: [
        ProductsContainerComponent,
        ProductsDeleteComponent,
        ProductsEditComponent,
        ProductsListComponent,
        ProductsNewComponent
    ],
    imports: [
        AppRoutingModule,
        MatIconModule,
        MatTableModule,
        GlobalModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        ProductsContainerComponent,
        ProductsDeleteComponent,
        ProductsEditComponent,
        ProductsListComponent,
        ProductsNewComponent
    ]
})
export class ProductsModule {}