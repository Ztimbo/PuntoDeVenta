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
import { PurchaseCalcComponent } from "./purchase-calc/purchase-calc.component";
import { PurchaseDetailComponent } from "./purchase-detail/purchase-detail.component";
import { PurchasesContainerComponent } from "./purchases-container/purchases-container.component";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        PurchasesContainerComponent,
        PurchaseCalcComponent,
        PurchaseDetailComponent
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
        FormsModule
    ],
    exports: [
        PurchasesContainerComponent,
        PurchaseCalcComponent,
        PurchaseDetailComponent
    ]
})
export class PurchasesModule {}