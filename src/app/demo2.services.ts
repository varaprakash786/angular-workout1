import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Demo2Service {
    constructor(private http: HttpClient){}
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    getData(){
        return this.http.get(this.apiUrl)
    }

}