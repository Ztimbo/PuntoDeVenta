import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { InventoryContainerComponent } from "./components/inventory-container/inventory-container.component";
import { InventoryListComponent } from "./components/inventory-list/inventory-list.component";

@NgModule({
    declarations: [
        InventoryListComponent,
        InventoryContainerComponent
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        InventoryListComponent,
        InventoryContainerComponent
    ]
})
export class InventoryModule {}