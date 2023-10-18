import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CategService } from "../../shared/services/categ.service";

@Component({
    selector: 'app-categ',
    templateUrl: './categ.component.html',
    styleUrls: ['./categ.component.scss']
})
export class CategComponent implements OnInit {
    categContent: any[] = this.categService.categContent;
    categFilteredContent: any[] = this.categService.categContent;
    filterCateg = '';

    constructor(private router: Router, private categService: CategService) { }

    ngOnInit(): void {
        this.categService.getCategContent();
    }


    filterCategChange(): void {
        this.categFilteredContent = this.categContent.filter((categContent) => {
            return categContent.name.includes(this.filterCateg);
        })
    }

    navigateToQuiz(categid: any) {
        this.router.navigate(['/quiz', categid]);
    }

}
