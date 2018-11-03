// Angular imports
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// App imports
// Models
import { User } from 'app/shared/models/user.model';
// Services
import { SearchService } from 'app/shared/services/search.service';

@Component({
    selector: 'vulnerable-easy',
    templateUrl: './easy.component.html',
    styleUrls: ['./easy.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EasyComponent implements OnInit {

    // UI State
    users: Array<User> = [];
    response: Object;
    showResponse = false;

    // Search form
    searchForm = new FormGroup({
        search: new FormControl(''),
        showResponse: new FormControl(false)
    });

    constructor(
        private _searchService: SearchService,
        private _ref: ChangeDetectorRef,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // Update searchbar based on route
        this.route.queryParams.subscribe(params => {
            this.searchForm.controls.search.setValue(params['firstName'] ? decodeURI(params['firstName']) : '');
        });
    }

    onSubmit(): void {
        this._searchService.searchUsernames(this.searchForm.controls.search.value)
            .subscribe((response: Array<Array<User>>) => {
                // Store the response
                this.users = response[0];
                this.response = response;
                // Mark for change detection
                this._ref.markForCheck();
                console.log('Response', response);
            });
    }

    trackByFn(index: number, user: User): string {
        return user.username;
    }

}
