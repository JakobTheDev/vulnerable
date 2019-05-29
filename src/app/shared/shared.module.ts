import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { BreadcrumbsComponent } from 'app/shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [BreadcrumbsComponent],
    imports: [CommonModule, ReactiveFormsModule, ClarityModule],
    exports: [CommonModule, ReactiveFormsModule, ClarityModule, BreadcrumbsComponent]
})
export class SharedModule {}
