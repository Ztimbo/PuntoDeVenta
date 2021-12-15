import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { AppRoutingModule } from "src/app/app-routing.module";
import { GlobalModule } from "src/app/global/app.module-global";
import { CategoriesContainerComponent } from "./components/categories-container/categories-container.component";
import { CategoriesDeleteComponent } from "./components/categories-delete/categories-delete.component";
import { CategoriesEditComponent } from "./components/categories-edit/categories-edit.component";
import { CategoriesListComponent } from "./components/categories-list/categories-list.component";
import { CategoriesNewComponent } from "./components/categories-new/categories-new.component";

@NgModule({
    declarations: [
        CategoriesContainerComponent,
        CategoriesDeleteComponent,
        CategoriesEditComponent,
        CategoriesListComponent,
        CategoriesNewComponent
    ],
    imports: [
        HttpClientModule,
        AppRoutingModule,
        MatIconModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        GlobalModule,
        MatMenuModule,
        ReactiveFormsModule,
        CommonModule,
        MatSnackBarModule
    ],
    exports: [
        CategoriesContainerComponent,
        CategoriesDeleteComponent,
        CategoriesEditComponent,
        CategoriesListComponent,
        CategoriesNewComponent
    ]
}) 
export class CategoriesModule { }