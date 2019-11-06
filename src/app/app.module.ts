import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header';
import { SidenavItemsModule } from './components/sidenav-items';
import {ContentModule} from './components/content/content.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SidenavItemsModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
