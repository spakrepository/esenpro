import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() img?: string;

  @Input() header?: string;

  @Input() subHeader?: string;

  constructor(
    private router:Router
  ) { 
  }

  ngOnInit(): void {
  }

  goto():void {
    this.router.navigate(['/home']);
  }

}
