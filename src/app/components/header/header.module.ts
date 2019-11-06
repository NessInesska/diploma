import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header.component';
import { SidenavItemsModule } from '../sidenav-items';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    SidenavItemsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
