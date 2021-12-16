import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { GlobalModule } from "src/app/global/app.module-global";
import { ProductsContainerComponent } from "./components/products-container/products-container.component";
import { ProductsDeleteComponent } from "./components/products-delete/products-delete.component";
import { ProductsEditComponent } from "./components/products-edit/products-edit.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductsNewComponent } from "./components/products-new/products-new.component";
import { ProductsService } from "./services/products.service";

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
        MatInputModule,
        HttpClientModule,
        MatOptionModule,
        MatSelectModule,
        BrowserModule,
        MatMenuModule,
        ReactiveFormsModule
    ],
    exports: [
        ProductsContainerComponent,
        ProductsDeleteComponent,
        ProductsEditComponent,
        ProductsListComponent,
        ProductsNewComponent
    ],
    providers: [
        ProductsService
    ]
})
export class ProductsModule {}