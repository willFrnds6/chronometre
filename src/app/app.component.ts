import { Component } from '@angular/core';
import { TimeItem } from './time-item';
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
  public timerArray : Array <TimeItem> = [];

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
    this.time = 0;

    this.timerArray = [];
  }

  private saveTimer():void {
    this.timerArray.push({
      time : this.time,
      note : ''
    }); 
  }


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

  public remove(index : number) : void {
    if(index >= 0 && index < this.timerArray.length) {
      this.timerArray.splice(index, 1);
    }
  }
}