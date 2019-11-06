import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatListModule, MatMenuModule } from '@angular/material';

import { SidenavItemsComponent } from './sidenav-items.component';

@NgModule({
  declarations: [
    SidenavItemsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    SidenavItemsComponent
  ]
})
export class SidenavItemsModule { }
