import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CoreRoutingModule } from 'app/core/core-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [
        // load shared components, services etc.
        SharedModule,
        ClarityModule,
        CommonModule,
        CoreRoutingModule
    ]
})
export class CoreModule {}
