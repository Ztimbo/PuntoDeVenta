import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GlobalModule } from 'src/app/global/app.module-global';
import { ProvidersContainerComponent } from './components/providers-container/providers-container.component';
import { ProvidersDeleteComponent } from './components/providers-delete/providers-delete.component';
import { ProvidersEditComponent } from './components/providers-edit/providers-edit.component';
import { ProvidersListComponent } from './components/providers-list/providers-list.component';
import { ProvidersNewComponent } from './components/providers-new/providers-new.component';
import { ProvidersService } from './services/providers.service';

@NgModule({
    declarations: [
        ProvidersNewComponent,
        ProvidersEditComponent,
        ProvidersListComponent,
        ProvidersContainerComponent,
        ProvidersDeleteComponent
    ],
    imports: [
        MatIconModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        AppRoutingModule,
        GlobalModule,
        HttpClientModule
    ],
    exports: [
        ProvidersNewComponent,
        ProvidersEditComponent,
        ProvidersListComponent,
        ProvidersContainerComponent,
        ProvidersDeleteComponent
    ],
    providers: [
        ProvidersService
    ]
})
export class ProvidersModule { }