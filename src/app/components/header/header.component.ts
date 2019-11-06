import {Component, EventEmitter, Output} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() newContentType = new EventEmitter();

  public contentType: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    console.log(this.contentType);
  }

  public getContentType($event) {
    this.contentType = $event;
    this.newContentType.emit(this.contentType);
  }
}
