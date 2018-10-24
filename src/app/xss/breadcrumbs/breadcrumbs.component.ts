// Angular imports
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'vulnerable-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {

    // Totally safe HTML
    protected html: SafeHtml;

    constructor(
        private _domSanitizer: DomSanitizer,
        private _ref: ChangeDetectorRef,
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {

        this._activatedRoute.url.subscribe((something: Array<UrlSegment>) => {
            // Generate totally safe HTML from the current path
            const path: string = something[0] ? something[0].path : 'breadcrumbs';
            this.html = this._domSanitizer.bypassSecurityTrustHtml(path);
            // Force change detection
            this._ref.markForCheck();
        });

    }

}
