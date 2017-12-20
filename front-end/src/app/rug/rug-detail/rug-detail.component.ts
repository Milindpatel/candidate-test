import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { RugService } from '../rug.service';
@Component({
  selector: 'app-rug-detail',
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.css']
})
export class RugDetailComponent implements OnInit {
  rug: any[] = [];
  constructor(
    private rugService: RugService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.rugService.getRug(params.get('id')))
      .subscribe(td => this.rug = td.rug[0])
  }
  goBack(): void {
    this.location.back();
  }
}
