import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ChartsModule } from "ng2-charts";
import { GlobalModule } from "src/app/global/app.module-global";
import { PrincipalDashboardComponent } from "./components/principal-dashboard/principal-dashboard.component";

@NgModule({
    declarations: [
        PrincipalDashboardComponent
    ],
    imports: [
        ChartsModule,
        GlobalModule,
        MatCardModule
    ],
    exports: [
        PrincipalDashboardComponent
    ]
})
export class DashboardModule {}