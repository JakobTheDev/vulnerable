// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// App imports
// Components
import { BreadcrumbsComponent } from 'app/xss/breadcrumbs/breadcrumbs.component';
import { MarkdownComponent } from 'app/xss/markdown/markdown.component';

const routes: Routes = [
    {
        path: 'breadcrumbs',
        component: BreadcrumbsComponent
    },
    {
        path: 'breadcrumbs/:payload',
        component: BreadcrumbsComponent
    },
    {
        path: 'markdown',
        component: MarkdownComponent
    },
    {
        path: '**',
        redirectTo: 'breadcrumbs'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class XssRoutingModule { }
