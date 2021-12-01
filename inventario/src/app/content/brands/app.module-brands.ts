import { NgModule } from '@angular/core';
import { BrandsContainerComponent } from './components/brands-container/brands-container.component';
import { BrandsDeleteComponent } from './components/brands-delete/brands-delete.component';
import { BrandsEditComponent } from './components/brands-edit/brands-edit.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { BrandsNewComponent } from './components/brands-new/brands-new.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GlobalModule } from 'src/app/global/app.module-global';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        BrandsDeleteComponent,
        BrandsEditComponent,
        BrandsListComponent,
        BrandsContainerComponent,
        BrandsNewComponent
    ],
    imports: [
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        AppRoutingModule,
        GlobalModule
    ],
    exports: [
        BrandsDeleteComponent,
        BrandsEditComponent,
        BrandsListComponent,
        BrandsContainerComponent,
        BrandsNewComponent
    ]
})
export class BrandsModule { }