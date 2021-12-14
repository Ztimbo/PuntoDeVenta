import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from "../app-routing.module";
import { CurrentUserComponent } from "./current-user/current-user.component";
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { LogoutOptionsComponent } from "./logout-options/logout-options.component";

@NgModule({
    declarations: [
        CurrentUserComponent,
        MenuLateralComponent,
        LogoutOptionsComponent
    ],
    imports: [
        MatIconModule,
        AppRoutingModule,
        MatExpansionModule
    ],
    exports: [
        CurrentUserComponent,
        MenuLateralComponent,
        LogoutOptionsComponent
    ]
})

export class MenuModule {}