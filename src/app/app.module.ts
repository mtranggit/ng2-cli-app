import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
// import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule, routingComponents } from './app.routing';
// import { SearchModule } from './search/search.module';
import { SearchService } from './search/search.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  // declarations: [
  //   AppComponent,
  //   AboutComponent,
  //   EventComponent,
  //   SearchComponent
  // ],
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule
  ],
  // providers: [
  //   appRoutingProviders,
  //   SearchService,
  //   Jsonp
  // ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
