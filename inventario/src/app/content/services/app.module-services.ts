import { NgModule } from "@angular/core";
import { ServicesContainerComponent } from "./components/services-container/services-container.component";
import { ServicesDeleteComponent } from "./components/services-delete/services-delete.component";
import { ServicesEditComponent } from "./components/services-edit/services-edit.component";
import { ServicesListComponent } from "./components/services-list/services-list.component";
import { ServicesNewComponent } from "./components/services-new/services-new.component";

@NgModule({
    declarations: [
        ServicesContainerComponent,
        ServicesDeleteComponent,
        ServicesEditComponent,
        ServicesListComponent,
        ServicesNewComponent
    ],
    exports: [
        ServicesContainerComponent,
        ServicesDeleteComponent,
        ServicesEditComponent,
        ServicesListComponent,
        ServicesNewComponent
    ]
})
export class ServicesModule {}