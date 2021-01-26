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
  public time = 0;
  private idInterval : number|null = null;
  public timerArray : Array <number> = [];

  public start():void {
    this.isStarted = true;
    this.isPaused = false;
    this.startTimer();   
  }

  public pause():void {
    this.isPaused = true;
    this.pauseTimer();
  }

  public stop():void {
    this.stopTimer();
    this.isStarted = false;
  }

  public save():void {
    this.saveTimer();
  }

  private startTimer():void {
    this.idInterval = setInterval(() => {
      this.time++;
    }, 1);
  }

  private pauseTimer():void {
    if(this.idInterval !== null){
      clearInterval(this.idInterval);
      this.saveTimer();
    }
  }

  private stopTimer(): void {
    this.pauseTimer();
    this.time = 0;

    this.timerArray = [];
  }

  private saveTimer():void {
    this.timerArray.push(this.time); 
  }
}
