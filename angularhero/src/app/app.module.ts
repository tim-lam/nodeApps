import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'data-access/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from 'components/app.component';
import { DashboardComponent } from 'components/dashboard.component';
import { HeroDetailComponent } from 'components/hero-detail.component';
import { HeroesComponent } from 'components/heroes.component';
import { HeroSearchComponent } from 'hero-search/hero-search.component';
import { HeroService } from 'services/hero.service';
import { MessageService } from 'services/message.service';
import { MessagesComponent } from 'components/message.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }