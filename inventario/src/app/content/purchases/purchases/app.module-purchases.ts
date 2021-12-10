import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { GlobalModule } from "src/app/global/app.module-global";
import { PurchaseCalcComponent } from "./components/purchases-new/purchase-calc/purchase-calc.component";
import { PurchaseDetailComponent } from "./components/purchases-new/purchase-detail/purchase-detail.component";
import { PurchasesContainerComponent } from "./components/purchases-container/purchases-container.component";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { PurchasesListComponent } from "./components/purchases-list/purchases-list.component";
import { PurchasesDetailComponent } from "./components/purchases-detail/purchases-detail.component";
import { PurchaseNewContainerComponent } from "./components/purchases-new/purchase-new-container/purchase-new-container.component";
import { MatMenuModule } from "@angular/material/menu";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations: [
        PurchasesContainerComponent,
        PurchaseCalcComponent,
        PurchaseDetailComponent,
        PurchasesListComponent,
        PurchasesDetailComponent,
        PurchaseNewContainerComponent
    ],
    imports: [
        GlobalModule,
        MatInputModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        BrowserModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        MatButtonModule,
        MatMenuModule,
        AppRoutingModule
    ],
    exports: [
        PurchasesContainerComponent,
        PurchaseCalcComponent,
        PurchaseDetailComponent,
        PurchasesListComponent,
        PurchasesDetailComponent,
        PurchaseNewContainerComponent
    ]
})
export class PurchasesModule {}