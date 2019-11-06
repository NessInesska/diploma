import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentComponent} from './content.component';
import {ReestrComponent} from '../reestr/reestr.component';
import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormComponent} from '../form/form.component';

@NgModule({
  declarations: [
    ContentComponent,
    ReestrComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    ContentComponent,
    ReestrComponent,
    FormComponent
  ]
})
export class ContentModule {
}
