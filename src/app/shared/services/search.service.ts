// Agular imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// App imports
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(
        private _http: HttpClient
    ) { }

    searchUsernames(username: string): Observable<any> {
        return this._http.get(`${environment.API_URL}/search?firstName=${username}`);
    }
}
