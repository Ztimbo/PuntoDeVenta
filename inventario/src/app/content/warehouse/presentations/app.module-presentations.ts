import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
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
        HttpClientModule
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