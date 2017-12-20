import { Component, OnInit } from '@angular/core';
import { RugService } from './rug/rug.service';
@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit {
    rugs: any[] = [];
    constructor(private rugService: RugService) { }
    ngOnInit(): void {
        this.rugService.getRugs()
            .then(rugs => this.rugs = rugs.rugs.reverse().slice(0, 3))
    }
}