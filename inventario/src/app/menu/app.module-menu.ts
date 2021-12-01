import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from "../app-routing.module";
import { CurrentUserComponent } from "./current-user/current-user.component";
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";

@NgModule({
    declarations: [
        CurrentUserComponent,
        MenuLateralComponent
    ],
    imports: [
        MatIconModule,
        AppRoutingModule
    ],
    exports: [
        CurrentUserComponent,
        MenuLateralComponent
    ]
})

export class MenuModule {}