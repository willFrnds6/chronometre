import { Component } from '@angular/core';
//import { start } from 'repl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chronometre';

  public isStarted = false;
  public isPaused = false;

  public start():void {
    this.isStarted = true;
  }

  public pause():void {
    this.isPaused = true;
  }
}
