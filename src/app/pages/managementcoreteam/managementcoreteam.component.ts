import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {ManagementCoreTeam } from 'src/app/models/managementcoreteam';
import { CoreteamService } from 'src/app/services/coreteam.service';

@Component({
  selector: 'app-managementcoreteam',
  templateUrl: './managementcoreteam.component.html',
  styleUrls: ['./managementcoreteam.component.scss']
})
export class ManagementcoreteamComponent implements OnInit {

  managementTeamList: ManagementCoreTeam[];
  coreTeamList : ManagementCoreTeam[];
  teamDetail:ManagementCoreTeam;
  isManagementVisible: boolean = false;
  currentState = 'initial';


  constructor(
    private coreteamService:CoreteamService
  ) { }

  ngOnInit(): void {
    this.loadManagementTeamList();
    this.loadCoreTeamList();
  }

  loadManagementTeamList():void {
    this.coreteamService.getCoreTeam().subscribe((data: ManagementCoreTeam[]) => {
      this.managementTeamList = data.filter(x => x.type == 'managementteam');
      console.log(this.managementTeamList);
    });
  }

  loadCoreTeamList():void {
    this.coreteamService.getCoreTeam().subscribe((data: ManagementCoreTeam[]) => {
      this.coreTeamList = data.filter(x => x.type == 'coreteam');
      console.log(this.coreTeamList);
    });
  }

  showDetail(team:any):void {
    debugger;
    this.teamDetail = team;
  }

  closeDetail():void {
    this.teamDetail = null;
  }

  getWindowWidth(): number {
    return window.innerWidth;
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
