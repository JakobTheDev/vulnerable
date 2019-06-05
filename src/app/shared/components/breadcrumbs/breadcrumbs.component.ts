import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'vulnerable-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
    /**
     * html to be loaded into dom, bypassing the angular sanitiser
     */
    html: SafeHtml;

    /**
     * the current url, split into segments
     */
    urlSegments: Array<SafeHtml>;

    constructor(private readonly domSanitizer: DomSanitizer, private readonly cdRef: ChangeDetectorRef, private readonly router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe(
            (event: any): void => {
                // On router chage, update breadcrumbs
                if (event instanceof NavigationEnd) {
                    this.urlSegments = event.urlAfterRedirects
                        // split url into segments
                        .split('/')
                        // remove any query parameters
                        .map((segment: string) => segment.split('?')[0])
                        // generate unsafe html
                        .map((segment: string) => this.domSanitizer.bypassSecurityTrustHtml(decodeURIComponent(segment)))
                        // filter out empty paths
                        .filter((segment: any) => !!segment.changingThisBreaksApplicationSecurity);
                    // force change detection
                    this.cdRef.markForCheck();
                }
            }
        );
    }
}
