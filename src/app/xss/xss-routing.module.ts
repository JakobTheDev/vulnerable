import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XssRoutes } from 'app/shared/models/app-routes.model';
import { BreadcrumbsDemoComponent } from 'app/xss/breadcrumbs-demo/breadcrumbs-demo.component';
import { ElectronComponent } from 'app/xss/electron/electron.component';
import { FormsComponent } from 'app/xss/forms/forms.component';
import { MarkdownComponent } from 'app/xss/markdown/markdown.component';

const routes: Routes = [
    {
        path: XssRoutes.BREADCRUMBS,
        component: BreadcrumbsDemoComponent
    },
    {
        path: `${XssRoutes.BREADCRUMBS}/:payload`,
        component: BreadcrumbsDemoComponent
    },
    {
        path: `${XssRoutes.ELECTRON}/:payload`,
        component: ElectronComponent
    },
    {
        path: XssRoutes.FORMS,
        component: FormsComponent
    },
    {
        path: XssRoutes.MARKDOWN,
        component: MarkdownComponent
    },
    {
        path: '',
        redirectTo: XssRoutes.BREADCRUMBS,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class XssRoutingModule {}
