// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
// App imports
// Components
import { AppComponent } from './app.component';
// Modules
import { AppRoutingModule } from './app-routing.module';
// Services
import { ElectronService } from 'app/shared/services/electron.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
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
        })
    ],
    providers: [ElectronService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
