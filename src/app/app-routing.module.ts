import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/xss/breadcrumbs',
        pathMatch: 'full'
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
export class AppRoutingModule {}
