import { Component, OnInit } from '@angular/core';
import { RugService } from '../rug.service';
@Component({
  selector: 'app-rug-list',
  templateUrl: './rug-list.component.html',
  styleUrls: ['./rug-list.component.css']
})
export class RugListComponent implements OnInit {
  rugs: any[] = [];
  rug: any = {};
  constructor(private rugService: RugService) { }
  ngOnInit(): void {
    this.rugService.showAddRugBox = true;
    this.rugService.getRugs()
      .then(td => this.rugs = td.rugs)
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