import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { RugService } from './rug/rug.service';
import { RugListComponent } from './rug/rug-list/rug-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RugListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [RugService],
  bootstrap: [AppComponent]
})
export class AppModule { }