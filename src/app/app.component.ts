import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {NavigationEnd, RouteConfigLoadStart, Router } from '@angular/router';
import {CustomTitle} from './models/customTitle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'Website';

  titleList:CustomTitle[];

  isLoaderVisible: boolean = true;

  constructor(
    private router: Router,
    private titleService: Title
  ) {
    console.log('Current Url', this.router.url);

    if(this.router.url == '/') {
      this.titleService.setTitle('Esenpro | Gearbox Manufacturer in India');
    }
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoaderVisible = false;
    }, 500);

    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        const url = val.url.substring(val.url.indexOf('/') + 1).trim().toLowerCase();

        switch (url) {
          case 'home':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'about-esenpro':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'core-team':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'infrastructure':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'certifications':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'quality-&-assurance':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'service':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'product':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'events':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'career':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'network':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          case 'contact':
            this.titleService.setTitle(this.getTitleFromTitleList(url));
            break;
          default:
            this.titleService.setTitle(' ');
        }

      }
    });

    this.router.events.subscribe((event) => {
      if((event) instanceof RouteConfigLoadStart) {
        this.isLoaderVisible = true;
      } else {
        setTimeout(() => {
          this.isLoaderVisible = false;
        }, 500);
      }
    });

  }

  getTitleFromTitleList(_url:string): string {
    this.titleList = [
      {
        id:1,
        url: 'home',
        text: 'Esenpro | Gearbox Manufacturer in India'
      },
      {
        id:2,
        url: 'about-esenpro',
        text: 'Esenpro | Industrial Gearbox Manufacturers in India'
      },
      {
        id:3,
        url: 'core-team',
        text: 'Esenpro | Core Team'
      },
      {
        id:4,
        url: 'infrastructure',
        text: 'Esenpro | Infrastructure'
      },
      {
        id:5,
        url: 'certifications',
        text: 'Esenpro | Certifications'
      },
      {
        id:6,
        url: 'quality-&-assurance',
        text: 'Esenpro | Quality & Assurance'
      },
      {
        id:7,
        url: 'product',
        text: 'Esenpro | Gearbox Products'
      },
      {
        id:8,
        url: 'events',
        text: 'Esenpro | News & Events'
      },
      {
        id:9,
        url: 'career',
        text: 'Esenpro | Careers'
      },
      {
        id:10,
        url: 'network',
        text: 'Esenpro | Network'
      },
      {
        id:11,
        url: 'contact',
        text: 'Esenpro | Contact Us'
      },
      {
        id:12,
        url: 'service',
        text: 'Esenpro | Service'
      }

    ];

    const result = this.titleList.find(x => x.url.toLowerCase().toString() == _url).text;
    return result;
  }

}
