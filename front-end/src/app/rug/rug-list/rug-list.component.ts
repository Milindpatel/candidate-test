import { Component, OnInit } from '@angular/core';
import { RugService } from '../rug.service';
@Component({
  selector: 'app-rug-list',
  templateUrl: './rug-list.component.html',
  styleUrls: ['./rug-list.component.css']
})
export class RugListComponent implements OnInit {
  rugs:any[] = [];
  constructor(private rugService:RugService) { }
ngOnInit(): void {
    this.rugService.getRugs()
                    .then(td => this.rugs = td.rugs )
  }
}
