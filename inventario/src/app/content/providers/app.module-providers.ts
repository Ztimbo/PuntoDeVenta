import { NgModule } from '@angular/core';
import { ProvidersContainerComponent } from './components/providers-container/providers-container.component';
import { ProvidersDeleteComponent } from './components/providers-delete/providers-delete.component';
import { ProvidersEditComponent } from './components/providers-edit/providers-edit.component';
import { ProvidersListComponent } from './components/providers-list/providers-list.component';
import { ProvidersNewComponent } from './components/providers-new/providers-new.component';

@NgModule({
    declarations: [
        ProvidersNewComponent,
        ProvidersEditComponent,
        ProvidersListComponent,
        ProvidersContainerComponent,
        ProvidersDeleteComponent
    ],
    exports: [
        ProvidersNewComponent,
        ProvidersEditComponent,
        ProvidersListComponent,
        ProvidersContainerComponent,
        ProvidersDeleteComponent
    ]
})
export class ProvidersModule { }