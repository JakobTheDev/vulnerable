// Angular imports
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// App imports
// Components
import { EasyComponent } from './easy/easy.component';
// Modules
import { SqliRoutingModule } from './sqli-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SqliRoutingModule
    ],
    declarations: [EasyComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SqliModule { }
