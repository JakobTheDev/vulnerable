// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// App imports
// Components
import { BreadcrumbsComponent } from 'app/xss/breadcrumbs/breadcrumbs.component';

const routes: Routes = [
    {
        path: '**',
        component: BreadcrumbsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class XssRoutingModule { }
