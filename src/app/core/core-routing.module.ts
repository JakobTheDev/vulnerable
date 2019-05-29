import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/core/containers/app/app.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: CoreComponent,
    //     children: [
    {
        path: 'xss',
        loadChildren: 'app/xss/xss.module#XssModule'
    },
    {
        path: 'sqli',
        loadChildren: 'app/sqli/sqli.module#SqliModule'
    }
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {}
