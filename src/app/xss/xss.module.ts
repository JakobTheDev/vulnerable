// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
// App imports
// Components
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MarkdownComponent } from './markdown/markdown.component';
// Modules
import { XssRoutingModule } from './xss-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    XssRoutingModule,
    ReactiveFormsModule,
    MarkdownModule.forChild()
  ],
  declarations: [BreadcrumbsComponent, MarkdownComponent]
})
export class XssModule {}
