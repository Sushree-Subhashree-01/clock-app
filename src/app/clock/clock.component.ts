import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import moment from 'moment'; 

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit, OnDestroy {

  currentTime: string = ''; 
  timeSubscription: Subscription = new Subscription(); 

  constructor() {}

  ngOnInit(): void {
    this.timeSubscription = interval(1000).subscribe(() => {
      this.updateTime();
    });
  }

  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  updateTime(): void {
    this.currentTime = moment().format('hh:mm:ss A');
  }
}