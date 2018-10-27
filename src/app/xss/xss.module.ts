// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App imports
// Components
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
// Modules
import { XssRoutingModule } from './xss-routing.module';

@NgModule({
    imports: [
        CommonModule,
        XssRoutingModule
    ],
    declarations: [BreadcrumbsComponent]
})
export class XssModule { }
