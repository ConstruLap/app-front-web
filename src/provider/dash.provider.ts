import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class DashProvider {
    constructor(public http: HttpClient) { }

    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private dashboardURL = environment.apiUrl + '/dashboard';


    uploadDocument(formData) {
        return this.http.post(this.dashboardURL + '/upload', formData)
            .pipe(
                (res => res)
            );
    }

}