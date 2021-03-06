import { app, BrowserWindow, screen, Screen, Size } from 'electron';
import * as path from 'path';
import * as url from 'url';

/**
 * the browser window containing the electron app
 */
let win: BrowserWindow;

/**
 * get the list of argumnts to determine if serving or built
 */
const args: Array<string> = process.argv.slice(1);
const serve: boolean = args.some((arg: string) => arg === '--serve');
const enableDevtools: boolean = args.some((arg: string) => arg === '--devtools');

/**
 * construct the electron window
 */
function createWindow(): void {
    const electronScreen: Screen = screen;
    const size: Size = electronScreen.getPrimaryDisplay().workAreaSize;

    // Create the browser window.
    win = new BrowserWindow({
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false
    });

    if (serve) {
        // tslint:disable-next-line: no-require-imports
        require('electron-reload')(__dirname, {
            electron: require(`${__dirname}/node_modules/electron`)
        });
        win.loadURL('http://localhost:4200');
    } else {
        win.loadURL(
            url.format({
                pathname: path.join(__dirname, 'dist/index.html'),
                protocol: 'file:',
                slashes: true
            })
        );
    }

    if (enableDevtools) {
        win.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

try {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on('ready', createWindow);

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (win === null) {
            createWindow();
        }
    });
} catch (e) {
    // Catch Error
    // throw e;
}
