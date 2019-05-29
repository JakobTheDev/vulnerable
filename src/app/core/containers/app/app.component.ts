import { Component } from '@angular/core';
import { ElectronService } from 'app/shared/services/electron.service';

@Component({
    selector: 'vulnerable-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public electronService: ElectronService) {}

    onClickMinimise(): void {
        this.electronService.remote.getCurrentWindow().minimize();
    }

    onClickMaximise(): void {
        this.electronService.remote.getCurrentWindow().maximize();
    }

    onClickUnmaximise(): void {
        this.electronService.remote.getCurrentWindow().unmaximize();
    }

    onClickClose(): void {
        this.electronService.remote.getCurrentWindow().close();
    }

    isMaximized(): boolean {
        return this.electronService.remote.getCurrentWindow().isMaximized();
    }
}
