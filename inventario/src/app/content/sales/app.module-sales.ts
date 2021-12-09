import { NgModule } from "@angular/core";
import { SalesContainerComponent } from "./sales-container/sales-container.component";

@NgModule({
    declarations: [
        SalesContainerComponent
    ],
    exports: [
        SalesContainerComponent
    ]
})

export class SalesModule {}