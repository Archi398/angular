import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CategService {
    categContent: any[] = [];

    constructor(private http: HttpClient) { }


    getCategContent() {
        this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
            for (const categorie of categories) {
                this.categContent.push({
                    id: categorie.id,
                    name: categorie.name,
                    categid: categorie.categid
                });
            }
        });
    }

}
