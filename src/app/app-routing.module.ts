// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'xss',
        loadChildren: 'app/xss/xss.module#XssModule'
    },
    {
        path: '**',
        redirectTo: '/xss/breadcrumbs'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
