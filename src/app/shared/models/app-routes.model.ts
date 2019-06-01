/**
 * routes
 */
export enum AppRoutes {
    XSS = 'xss',
    SQLI = 'sqli'
}

export enum XssRoutes {
    BREADCRUMBS = 'breadcrumbs',
    ELECTRON = 'electron',
    FORMS = 'forms',
    MARKDOWN = 'markdown'
}

export enum SqliRoutes {
    EASY = 'easy'
}

/**
 * query params
 */
export enum MarkdownQueryParams {
    CLEAN = 'clean',
    NOT_WEAPONISED = 'not-weaponised',
    WEAPONISED = 'weaponised'
}
