import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  serviceList : any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadServiceList();
  }

  loadServiceList():void {
    this.serviceList = [
      {
        id:1,
        heading:'Gearbox Overhaul <br /> & Repairs',
        detail:'At Esenpro, we are equipped to handle all areas of gearbox overhaul and repair. This includes complete disassembly, cleaning, thorough inspection, checking and taking measurements, evaluating and providing recommendations for modification. We also repair and overhaul other brand-name gearboxes right from gearbox repair and reverse engineering up to installation and testing.'
      },
      {
        id:2,
        heading:'Gearbox Maintenance <br /> & Health Check-up',
        detail:'At Esenpro, we believe that maintenance is better than repair and hence we insist on evaluating the condition of gearbox at regular intervals through maintenance program and checks comprising of visual, thermal, vibration noise by providing proper documented report on the health of the gearbox and tips to keep the gearbox operation smoothly by preventive maintenance practices.'
      },
      {
        id:3,
        heading:'Design & Engineering <br /> Consultancy',
        detail:'At Esenpro, we believe in providing unique solutions to customers’ gear manufacturing needs. Whether we have to cater to large-scale production or reverse engineering or developing prototypes for new product development, Esenpro design services have the capabilities with all the needed softwares to ensure a robust gearbox. Whether your requirement calls for minor improvements or a complete redesign, our design and engineering consultancy team joins with you to provide you the exact solutions.'
      }
    ];
  }

  getWindowWidth(): number {
    return window.innerWidth;
  }

}
