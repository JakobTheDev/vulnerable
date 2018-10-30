// Angular imports
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'vulnerable-easy',
    templateUrl: './easy.component.html',
    styleUrls: ['./easy.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EasyComponent {

    constructor() { }

}
