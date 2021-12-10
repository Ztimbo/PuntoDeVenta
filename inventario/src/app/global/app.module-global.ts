import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { ContentTitleComponent } from "./content-title/content-title.component";
import { IndicatorElementComponent } from "./indicator-element/indicator-element.component";
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [
        ContentTitleComponent,
        IndicatorElementComponent
    ],
    imports: [
        MatCardModule,
        MatIconModule,
        CommonModule
    ],
    exports: [
        ContentTitleComponent,
        IndicatorElementComponent
    ]
})
export class GlobalModule { }