import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppSidebarComponent } from 'app/core/containers/app-sidebar/app-sidebar.component';
import { AppComponent } from 'app/core/containers/app/app.component';
import { ElectronService } from 'app/shared/services/electron.service';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, AppSidebarComponent],
    imports: [
        // load shared components, services etc.
        SharedModule,
        BrowserModule,
        HttpClientModule,
        PrettyJsonModule,
        AppRoutingModule,
        ClarityModule,
        ClrFormsNextModule,
        BrowserAnimationsModule,
        MarkdownModule.forRoot({
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: false,
                    smartLists: true,
                    smartypants: false
                }
            }
        }),
        CoreModule
    ],
    providers: [ElectronService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
