import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RugListComponent } from '../rug-list/rug-list.component';
import { RugDetailComponent } from '../rug-detail/rug-detail.component'
const rugRoutes: Routes = [
  { path: 'rugs', component: RugListComponent },
  { path: 'rug/:id', component: RugDetailComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(rugRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RugRoutingModule { }