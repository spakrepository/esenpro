import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events';
import { PastUpComingEvent } from 'src/app/models/pastupcomingevent';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  pastEvents: Events[];
  upComingEvents: Events[];
  currentEvent:PastUpComingEvent;


  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.loadEvent();
    this.currentEvent = PastUpComingEvent.PastEvent;
  }

  loadEvent():void {
    this.loadPastEventList();
    this.loadUpComingEventList();
  }

  public loadPastEventList():void {
    this.eventService.pastEvent().subscribe((data:Events[]) => {
      this.pastEvents = data;
    });
  }

  public loadUpComingEventList():void {
    this.eventService.upComingEvent().subscribe((data: Events[]) => {
      this.upComingEvents = data;
    });
  }

  public gotoEvent(eventType:any):void {
    console.log(eventType);
    if(eventType == 'pastevent') {
      this.currentEvent = PastUpComingEvent.PastEvent;
    } else {
      this.currentEvent = PastUpComingEvent.UpComingEvent;
    }
  }

  getWindowWidth(): number {
    return window.innerWidth;
  }

}
