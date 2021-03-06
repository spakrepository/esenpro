import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public pastEvent(): Observable<any> {
    return this.http.get('/assets/data/past-event.json');
  } 

  public upComingEvent():Observable<any> {
    return this.http.get('/assets/data/upcoming-event.json');
  }
}
