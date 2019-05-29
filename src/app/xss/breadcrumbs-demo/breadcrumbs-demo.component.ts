// Angular imports
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'vulnerable-breadcrumbs-demo',
    templateUrl: './breadcrumbs-demo.component.html',
    styleUrls: ['./breadcrumbs-demo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsDemoComponent {
    constructor() {}
}
