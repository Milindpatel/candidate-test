import { Component, OnInit } from '@angular/core';
import { RugService } from './rug/rug.service';
@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit {
    rugs: any[] = [];
    rug: any = {};
    constructor(private rugService: RugService) { }
    ngOnInit(): void {
        this.rugService.showAddRugBox = true;
        this.rugService.getRugs()
            .then(rugs => this.rugs = rugs.rugs.reverse().slice(0, 3))
    }
    AddRug(rug: any): void {
        if (!rug) { return; }
        this.rugService.createRug(rug)
            .then(td => {
                console.log(td);
                this.rugs.push(td.rug);
            })
    }
}