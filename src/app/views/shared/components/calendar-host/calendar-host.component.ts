import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calendar-host',
  templateUrl: './calendar-host.component.html',
  styleUrls: ['./calendar-host.component.scss']
})
export class CalendarHostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date;

  clickedColumn: number;

  refresh = new Subject();

  hourSegmentSelected(segment){
    const event: CalendarEvent = {
      id: segment.date,
      title: 'Free Slot',
      start: segment.date,
      meta: {
        tmpEvent: true,
      },
    };

    this.events = [...this.events, event];
  }

  eventClicked(changes){
    var index = this.events.findIndex(i => i.id === changes.event.id);
    if(index != -1){
      this.events.splice(index, 1);
    }
    this.refresh.next()
  }
}
