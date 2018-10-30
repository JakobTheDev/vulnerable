// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App imports
// Components
import { EasyComponent } from './easy/easy.component';
// Modules
import { SqliRoutingModule } from './sqli-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SqliRoutingModule
    ],
    declarations: [EasyComponent]
})
export class SqliModule { }
