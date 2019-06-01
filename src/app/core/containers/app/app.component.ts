import { Component } from '@angular/core';
import { ElectronService } from 'app/shared/services/electron.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'vulnerable-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    SECRET_SESSION_TOKEN: string = 'SESSION_TOKEN';
    SECRET_SESSION_USERNAME: string = 'USERNAME';
    SECRET_SESSION_PASSWORD: string = 'PASSWORD';

    constructor(private readonly cookieService: CookieService, public electronService: ElectronService) {
        // set up secrets for demos
        cookieService.set(this.SECRET_SESSION_TOKEN, 'WHATEVER');
        cookieService.set(this.SECRET_SESSION_USERNAME, 'WHATEVER');
        cookieService.set(this.SECRET_SESSION_PASSWORD, 'WHATEVER');

        localStorage.setItem(this.SECRET_SESSION_TOKEN, 'WHATEVER');
        localStorage.setItem(this.SECRET_SESSION_USERNAME, 'WHATEVER');
        localStorage.setItem(this.SECRET_SESSION_PASSWORD, 'WHATEVER');

        sessionStorage.setItem(this.SECRET_SESSION_TOKEN, 'WHATEVER');
        sessionStorage.setItem(this.SECRET_SESSION_USERNAME, 'WHATEVER');
        sessionStorage.setItem(this.SECRET_SESSION_PASSWORD, 'WHATEVER');
    }

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
