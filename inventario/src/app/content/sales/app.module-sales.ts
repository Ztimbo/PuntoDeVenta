import { NgModule } from "@angular/core";
import { SalesContainerComponent } from "./components/sales-container/sales-container.component";

@NgModule({
    declarations: [
        SalesContainerComponent
    ],
    exports: [
        SalesContainerComponent
    ]
})

export class SalesModule {}