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
  rugToEdit: any = {};
  rugToDelete: any = {};
  apiMessage: string;
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
  showEditRug(rug: any): void {
    this.rugToEdit = rug;
    this.apiMessage = "";
  }
  EditRug(rug: any): void {
    if (!rug) { return; }
    rug.id = this.rugToEdit._id;
    console.log(rug.id);
    this.rugService.updateRug(rug)
      .then(td => {
        const updatedRugs = this.rugs.map(t => {
          if (td.rug._id != t._id) {
            return t;
          }
          return { ...t, ...td.rug };
        })
        this.apiMessage = td.message;
        this.rugs = updatedRugs;
      })
  }
  showDeleteRug(rug: any): void {
    this.rugToDelete = rug;
    this.apiMessage = "";
  }
  DeleteRug(rug: any): void {
    if (!rug) { return; }
    console.log(rug._id)
    this.rugService.deleteRug(rug)
      .then(td => {
        
        const filteredRugs = this.rugs.filter(t => td.success);
        this.apiMessage = td.message;
        this.rugs = filteredRugs;
      })
  }
}