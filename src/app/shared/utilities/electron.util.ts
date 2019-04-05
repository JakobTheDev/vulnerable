/**
 * A class for electron related helpers
 */
export class ElectronUtilities {
    // determine if the app is rinning in electron mode
    static isElectron(): boolean {
        const process: any = (window as any).process;
        return process && process.versions && process.versions.electron;
    }
}
