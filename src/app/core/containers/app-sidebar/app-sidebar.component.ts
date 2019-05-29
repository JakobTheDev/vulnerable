import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ElectronService } from 'app/shared/services/electron.service';

@Component({
    selector: 'vulnerable-app-sidebar',
    templateUrl: './app-sidebar.component.html',
    styleUrls: ['./app-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSidebarComponent {
    constructor(public electronService: ElectronService) {}
}
