import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  goto(url:string):void {
    this.router.navigate(['/' + url]);
    //window.location.replace('/'+url);
  }

}
