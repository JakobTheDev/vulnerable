// App imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// App imports
// Components
import { EasyComponent } from 'app/sqli/easy/easy.component';

const routes: Routes = [
    {
        path: 'easy',
        component: EasyComponent
    },
    {
        path: '**',
        redirectTo: 'easy'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SqliRoutingModule { }
