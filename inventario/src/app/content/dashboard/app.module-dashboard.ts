import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ChartsModule } from "ng2-charts";
import { GlobalModule } from "src/app/global/app.module-global";
import { BrandsService } from "../brands/services/brands.service";
import { ProductsService } from "../products/services/products.service";
import { ProvidersService } from "../providers/services/providers.service";
import { PrincipalDashboardComponent } from "./components/principal-dashboard/principal-dashboard.component";

@NgModule({
    declarations: [
        PrincipalDashboardComponent
    ],
    imports: [
        ChartsModule,
        GlobalModule,
        MatCardModule,
        HttpClientModule
    ],
    exports: [
        PrincipalDashboardComponent
    ],
    providers: [
        ProvidersService,
        BrandsService,
        ProductsService
    ]
})
export class DashboardModule {}