import { Component, OnInit } from '@angular/core';
import { JourneyDetail } from 'src/app/models/journeydetail';
import { JourneyYear } from 'src/app/models/journeyyear';
import { ToggleChairmanCompanyProfile } from 'src/app/models/toggleChairmanCompanyProfile';
import { JourneyService } from 'src/app/services/journey.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  paragraph: string[];

  journeyYearList: JourneyYear[];

  journeyDetail: JourneyDetail;

  currentYear: number = 1;

  toggleChairmanCompanyProfile:ToggleChairmanCompanyProfile;

  isJourneyVisible: boolean = false;

  constructor(private journeyService: JourneyService) { }
  

  ngOnInit(): void {

    this.paragraph = [
      'We are pleased to introduce to you “ESENPRO”, a brand of Essential Power Transmission Pvt. Ltd., India, established in 1947.',
      'We are one of the leading manufacturers and exporters of standard and custom built Industrial Gearboxes. Esenpro is an ISO 9001:2015 certified company by TUV SUD. Our company is a proud member of AGMA since 2005.',
      'Esenpro is 3rd generation family business having its manufacturing unit in Gujarat and Head Quarters in Mumbai. We have multiple installations globally in the steel, cement, plastic, mining, power, overhead cranes, port, and chemical industries.',
      'The manufacturing unit is equipped with state of the art CNC machines and other infrastructural equipment’s to produce high quality gears. In- house manufacturing include Shaft and Blank Turning as well as Gear Hobbing, Heat treatment, Cylindrical Grinding, Gear Teeth Profile Grinding all under one Roof.',
      'Esenpro has always given utmost priority to QUALITY, and that has been our drive to success. Forging blanks and Round bars sourced from reputed forging companies in India. The material undergoes series of quality check to ensure high reliability of the gearbox. The gearbox housing is provided in both CI and M.S Fabricated. MS fabricated Gearbox housings are duly stressed relieved and shot blasted. Other bought out material such as Bearings and Oil Seals are directly procured from reputed OEM.',
      'Our team includes experienced technocrats and engineers who are continuously developing gearbox to best suit the end user application. We use Kissoft to design the gears and pinions. BearinX is used for bearing calculations like bearing life, shaft displacement and various loads on bearings. For FEA analysis we are using Solidworks and AutoDesk for drafting.',
      'We thank you for visitng our website and we eagerly look forward to working with you in the near future. '
    ];

    this.loadJourneyYear();
    this.loadJourneyDetail();

  }

  toggleChairmanCompanypro(val:any):void {
     if(val == 'company') {
       this.toggleChairmanCompanyProfile = ToggleChairmanCompanyProfile.CompanyPRofile;
     }

     if(val == 'chairman') {
       this.toggleChairmanCompanyProfile = ToggleChairmanCompanyProfile.ChairmanProfile;
     }
  }

  loadJourneyYear():void {
    this.journeyService.getJourneyYear().subscribe((data: JourneyYear[]) => {
      this.journeyYearList = data;
    });
  }

  loadJourneyDetail(): void {
    this.journeyService.getJourneyDetail().subscribe((data: JourneyDetail[]) => {
      this.journeyDetail = data[0];
    });
  }

  gotoJourney(obj: JourneyYear):void {
    this.journeyService.getJourneyDetail(). subscribe((data: JourneyDetail[]) => {
      this.journeyDetail = data.find(x => x.id == obj.journeyDetailId);
      console.log(this.journeyDetail);
    });
  }

  getWindowWidth(): number {
    return window.innerWidth;
  }

}
