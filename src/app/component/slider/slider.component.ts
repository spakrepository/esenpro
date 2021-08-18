import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carousel } from 'src/app/models/carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  carousel: Carousel[];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadCarouselList();
  }

  loadCarouselList(): void {
    this.carousel = [
      {
        id:1,
        img: '1.jpg',
        alt:'image',
        heading:'Bevel Planetary <br /> Gearbox',
        paragraph:'For Bucket Wheel Drive',
        subCategoryId: 2,
        imgListId: 3
      },
      {
        id:2,
        img: '2.jpg',
        alt:'image',
        heading:'Custom Design <br /> Helical Gearbox',
        paragraph:'for tube mill',
        subCategoryId: null,
        imgListId: null
      },
      {
        id:3,
        img: '3.jpg',
        alt:'image',
        heading:'Bevel Helical <br /> Gearbox',
        paragraph:'For furnace pusher',
        subCategoryId: 2,
        imgListId: 5
      },
      {
        id:4,
        img: '4.jpg',
        alt:'image',
        heading:'Gearbox',
        paragraph:'Rotary Kiln Drive',
        subCategoryId: null,
        imgListId: null
      },
      {
        id:5,
        img: '5.jpg',
        alt:'image',
        heading:'Integrated Drive <br /> Solution',
        paragraph:'For Conveyor Drives',
        subCategoryId: 2,
        imgListId: 2
      }
    ];
  }

  gotoProduct(obj:any):void {
    this.router.navigate(['/product'], {
      queryParams: {
        subCatId: obj.subCategoryId,
        imgListId: obj.imgListId
      }
    });
  }

}

