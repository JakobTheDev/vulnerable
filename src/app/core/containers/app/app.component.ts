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

    USERNAME: string = 'JohnDoe';
    PASSWORD: string = 'DogsNameWifesBirthday';
    TOKEN: string = '4237a03763b1467cb978a09e8b90dd8f';

    constructor(private readonly cookieService: CookieService, public electronService: ElectronService) {
        // set up secrets for demos
        cookieService.set(this.SECRET_SESSION_TOKEN, this.TOKEN);
        cookieService.set(this.SECRET_SESSION_USERNAME, this.USERNAME);
        cookieService.set(this.SECRET_SESSION_PASSWORD, this.PASSWORD);

        localStorage.setItem(this.SECRET_SESSION_TOKEN, this.TOKEN);
        localStorage.setItem(this.SECRET_SESSION_USERNAME, this.USERNAME);
        localStorage.setItem(this.SECRET_SESSION_PASSWORD, this.PASSWORD);

        sessionStorage.setItem(this.SECRET_SESSION_TOKEN, this.TOKEN);
        sessionStorage.setItem(this.SECRET_SESSION_USERNAME, this.USERNAME);
        sessionStorage.setItem(this.SECRET_SESSION_PASSWORD, this.PASSWORD);
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
