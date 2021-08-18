import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreteamService {

  constructor(private http: HttpClient) { }

  public getCoreTeam(): Observable<any> {
    return this.http.get('/assets/data/team.json');
  }

}
