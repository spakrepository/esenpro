import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InfraCarousel } from 'src/app/models/infracarousel.model';
import { Infrastructure } from 'src/app/models/infrastructure.model';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfrastructureComponent implements OnInit {

  toggleTest:boolean = false;

  infrastructureList: Infrastructure[];

  infraCarousel: InfraCarousel[];

  currentInfraObj: Infrastructure;

  currentId: number;

  constructor() { }

  ngOnInit(): void {
    this.loadInfraList();
    this.loadCarousel();
    //this.currentInfraObj = this.infrastructureList.find(x => x.id == 1);
  }

  test():void {
    this.toggleTest = !this.toggleTest;
  }

  getWindowWidth(): number {
    return window.innerWidth;
  }

  loadInfraList():void {
    this.infrastructureList = [
      {
        id:1,
        name: 'CNC Gear Grinding',
        item: [
          {
            id:1,
            imgUrl:'1.jpg',
            altText:'PROFILE GRINDING MACHINE',
            heading:'PROFILE GRINDING MACHINE',
            description:'400 mm OD Capacity'
          },
          {
            id:2,
            imgUrl:'2.jpg',
            altText:'PROFILE GRINDING MACHINE',
            heading:'PROFILE GRINDING MACHINE',
            description:'800mm OD Capacity'
          },
          {
            id:3,
            imgUrl:'3.jpg',
            altText:'PROFILE GRINDING MACHINE',
            heading:'PROFILE GRINDING MACHINE',
            description:'1500 mm OD Capacity'
          }
        ]
      },
      {
        id:2,
        name:'CNC Machining Centre',
        item: [
          {
            id:1,
            imgUrl:'4.jpg',
            altText:'DOOSAN HORIZONTAL MACHINING CENTRE',
            heading:'DOOSAN HORIZONTAL MACHINING CENTRE',
            description:null
          },
          {
            id:2,
            imgUrl:'5.jpg',
            altText:'JUARISITI HORIZONTAL BORING MACHINE',
            heading:'JUARISITI HORIZONTAL BORING MACHINE',
            description:null
          },
          {
            id:3,
            imgUrl:'6.jpg',
            altText:'GORATU BED TYPE MILLING MACHINE',
            heading:'GORATU BED TYPE MILLING MACHINE',
            description:null
          }
        ]
      }
    ];
  }

  loadCarousel():void {
    this.infraCarousel = [
      {
        id:1,
        imgUrl: '7.jpg',
        altText:null
      },
      {
        id:2,
        imgUrl: '8.jpg',
        altText:null
      },
      {
        id:3,
        imgUrl: '9.jpg',
        altText:null
      },
      {
        id:4,
        imgUrl: '10.jpg',
        altText:null
      }
    ];
  }

  showInfraData(obj: Infrastructure):void {
    this.currentInfraObj = obj;
    this.currentId = obj.id;
    console.log(this.currentInfraObj);
  }

}
