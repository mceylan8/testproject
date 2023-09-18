import { Component, OnInit } from '@angular/core';
import roomDescriptions from '../../assets/roomDescription.json';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.css'],
})
export class TimeTrackingComponent implements OnInit {
  rooms = roomDescriptions.roomDescriptions;
  selectedRoom: string = '';
  isTracking: boolean = false;
  startTime: Date | null = null;
  elapsedTime: string = '00:00:00';

  constructor() {}

  ngOnInit(): void {
    this.resetTimer();
  }

  startTracking(): void {
    if (!this.selectedRoom) {
      alert('Bitte wählen Sie einen Raum aus.');
      return;
    }

    this.isTracking = true;
    this.startTime = new Date();

    // Timer aktualisieren
    setInterval(() => {
      if (this.startTime) {
        const now = new Date();
        const diff = now.getTime() - this.startTime.getTime();
        const date = new Date(diff);
        this.elapsedTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
      }
    }, 1000);
  }

  stopTracking(): void {
    this.isTracking = false;
    this.resetTimer();
  }

  resetTimer(): void {
    this.elapsedTime = '00:00:00';
    this.startTime = null;
  }
}
