import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RugListComponent } from '../rug-list/rug-list.component';
const rugRoutes: Routes = [
  { path: 'rugs', component: RugListComponent }
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