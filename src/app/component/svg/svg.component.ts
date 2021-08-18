import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {

  @Input() plusIcon: boolean = false;
  @Input() minusIcon: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
