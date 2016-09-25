import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routingComponents } from './app.routing';

import { AppComponent } from './app.component';
// import { routing, appRoutingProviders } from './app.routing';
// import { SearchModule } from './search/search.module';
import { SearchService } from './search/search.service';

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
  //   SearchService
  // ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
