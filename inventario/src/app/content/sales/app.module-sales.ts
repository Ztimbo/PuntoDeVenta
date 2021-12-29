import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { GlobalModule } from "src/app/global/app.module-global";
import { SalesContainerComponent } from "./components/sales-container/sales-container.component";
import { SalesDetailComponent } from "./components/sales-detail/sales-detail.component";
import { SalesListComponent } from "./components/sales-list/sales-list.component";
import { SalesNewComponent } from "./components/sales-new/sales-new.component";

@NgModule({
    declarations: [
        SalesContainerComponent,
        SalesListComponent,
        SalesDetailComponent,
        SalesNewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GlobalModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatButtonModule
    ],
    exports: [
        SalesContainerComponent,
        SalesListComponent,
        SalesDetailComponent,
        SalesNewComponent
    ]
})

export class SalesModule {}