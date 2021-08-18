import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobnetwork',
  templateUrl: './mobnetwork.component.html',
  styleUrls: ['./mobnetwork.component.scss']
})
export class MobnetworkComponent implements OnInit {

  @Input() indexNum:number;
  @Input() stateName:string;
  @Input() name:string;
  @Input() email:string;

  constructor() { }

  ngOnInit(): void {
  }

}
