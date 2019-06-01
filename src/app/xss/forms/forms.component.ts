import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const DEFAULT_NAME: string = 'John Doe';
const DEFAULT_BIO: string = 'Living the simple life.';

@Component({
    selector: 'vulnerable-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsComponent {
    /**
     * set up the form
     */
    profileForm: FormGroup = new FormGroup({
        name: new FormControl(null),
        bio: new FormControl(null)
    });

    /**
     * saved values from the fowm
     * used to populate profile component
     */
    name: SafeHtml = DEFAULT_NAME;
    bio: SafeHtml = DEFAULT_BIO;

    constructor(private readonly domSanitizer: DomSanitizer) {}

    /**
     * handler for form save button
     */
    onSave(): void {
        this.name = this.profileForm.controls.name.value ? this.domSanitizer.bypassSecurityTrustHtml(this.profileForm.controls.name.value) : DEFAULT_NAME;
        this.bio = this.profileForm.controls.bio.value ? this.domSanitizer.bypassSecurityTrustHtml(this.profileForm.controls.bio.value) : DEFAULT_BIO;
    }
}
