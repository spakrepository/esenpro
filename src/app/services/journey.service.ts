import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(private http: HttpClient) { }

  public getJourneyYear(): Observable<any> {
    return this.http.get('/assets/data/journeyyear.json');
  }

  public getJourneyDetail(): Observable<any> {
    return this.http.get('/assets/data/journeydetail.json');
  }

}
