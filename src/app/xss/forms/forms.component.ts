import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'vulnerable-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
