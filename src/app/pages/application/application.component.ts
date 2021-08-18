import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  currentActiveId:any;

  applicationList: Application[];

  application:Application;

  constructor(
    private route: ActivatedRoute,
    private applicationService:ApplicationService
  ) { }

  ngOnInit(): void { 
    this.currentActiveId = this.route.snapshot.paramMap.get('id');
    this.applicationService.getApplicationData().subscribe((data:Application[]) => {
      this.applicationList = data;
      this.application = data.find(x => x.id == this.currentActiveId);
    });
  }

  selectApplication(obj:Application):void {
    this.application = obj;
    this.currentActiveId = obj.id;
  }

}
