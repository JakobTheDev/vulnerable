import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { BreadcrumbsDemoComponent } from './breadcrumbs-demo/breadcrumbs-demo.component';
import { ElectronComponent } from './electron/electron.component';
import { FormsComponent } from './forms/forms.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { XssRoutingModule } from './xss-routing.module';

@NgModule({
    imports: [
        // load shared components, services etc.
        SharedModule,
        CommonModule,
        FormsModule,
        XssRoutingModule,
        ReactiveFormsModule,
        MarkdownModule.forChild()
    ],
    declarations: [BreadcrumbsDemoComponent, FormsComponent, MarkdownComponent, ElectronComponent]
})
export class XssModule {}
