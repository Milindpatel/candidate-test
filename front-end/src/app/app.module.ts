import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { RugRoutingModule } from './rug/rug-routing/rug-routing.module';
import { RugService } from './rug/rug.service';
import { RugListComponent } from './rug/rug-list/rug-list.component';
import { RugDetailComponent } from './rug/rug-detail/rug-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RugListComponent,
    RugDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RugRoutingModule
  ],
  providers: [RugService],
  bootstrap: [AppComponent]
})
export class AppModule { }