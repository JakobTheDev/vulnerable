import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = (window as any).require('electron').ipcRenderer;
      this.webFrame = (window as any).require('electron').webFrame;
      this.remote = (window as any).require('electron').remote;

      this.childProcess = (window as any).require('child_process');
      this.fs = (window as any).require('fs');
    }
  }

  isElectron = () => {
    return (window as any) && (window as any).process && (window as any).process.type;
  }

}
