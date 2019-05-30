import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbsDemoComponent } from 'app/xss/breadcrumbs-demo/breadcrumbs-demo.component';
import { FormsComponent } from 'app/xss/forms/forms.component';
import { MarkdownComponent } from 'app/xss/markdown/markdown.component';

const routes: Routes = [
    {
        path: 'breadcrumbs',
        component: BreadcrumbsDemoComponent
    },
    {
        path: 'breadcrumbs/:payload',
        component: BreadcrumbsDemoComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'markdown',
        component: MarkdownComponent
    },
    {
        path: '',
        redirectTo: 'breadcrumbs',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class XssRoutingModule {}
