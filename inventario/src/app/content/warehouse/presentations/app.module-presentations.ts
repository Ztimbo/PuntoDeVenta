import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { AppRoutingModule } from "src/app/app-routing.module";
import { GlobalModule } from "src/app/global/app.module-global";
import { PresentationsContainerComponent } from "./components/presentations-container/presentations-container.component";
import { PresentationsDeleteComponent } from "./components/presentations-delete/presentations-delete.component";
import { PresentationsEditComponent } from "./components/presentations-edit/presentations-edit.component";
import { PresentationsListComponent } from "./components/presentations-list/presentations-list.component";
import { PresentationsNewComponent } from "./components/presentations-new/presentations-new.component";

@NgModule({
    declarations: [
        PresentationsContainerComponent,
        PresentationsDeleteComponent,
        PresentationsEditComponent,
        PresentationsListComponent,
        PresentationsNewComponent
    ],
    imports: [
        HttpClientModule,
        AppRoutingModule,
        MatIconModule,
        MatMenuModule,
        MatTableModule,
        GlobalModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        PresentationsContainerComponent,
        PresentationsDeleteComponent,
        PresentationsEditComponent,
        PresentationsListComponent,
        PresentationsNewComponent
    ]
})
export class PresentationsModule {}