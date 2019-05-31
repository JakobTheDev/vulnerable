import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'vulnerable-electron',
    templateUrl: './electron.component.html',
    styleUrls: ['./electron.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectronComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
