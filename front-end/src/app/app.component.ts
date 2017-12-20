import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RugService } from './rug/rug.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private rugService: RugService) { }
  // class method for toggling AddRugBox in rug-list.component.html
  showAddRugBox(e): void {
    e.preventDefault();
    this.rugService.showAddRugBox = !this.rugService.showAddRugBox;
  }
}

