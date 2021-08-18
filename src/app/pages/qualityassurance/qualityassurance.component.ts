import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualityassurance',
  templateUrl: './qualityassurance.component.html',
  styleUrls: ['./qualityassurance.component.scss']
})
export class QualityassuranceComponent implements OnInit {

  policyQulaity:string[];

  constructor() { }

  ngOnInit(): void {
    this.loadPolicyQuality();
  }

  loadPolicyQuality():void {
    this.policyQulaity = [
      'Upgrading the manufacturing facilities by incorporation of latest high precision quality machines.',
      'By understanding customer needs and requirements the aim of achieving customer satisfaction.',
      'To improve our production processes to reduce manufacturing lead time and ensure faster deliveries.',
      'To identify customers having requirement of non standard gearboxes.',
      'To immediately respond to service calls by customer.'
    ];
  }

  getWindowWidth(): number {
    return window.innerWidth;
  }

}
