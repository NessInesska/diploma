import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'diploma';
  public newContent: string;

  public getNewContentType($event) {
    this.newContent = $event;
  }
}
