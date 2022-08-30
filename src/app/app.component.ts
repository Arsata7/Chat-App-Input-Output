import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
  messages: string[] = [];

  displayMessages(event: any) {
    this.messages.push(event);
  }
}
