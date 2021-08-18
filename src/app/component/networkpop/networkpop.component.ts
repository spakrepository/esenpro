import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-networkpop',
  templateUrl: './networkpop.component.html',
  styleUrls: ['./networkpop.component.scss']
})
export class NetworkpopComponent implements OnInit {

  @Input() name:string;
  @Input() email:string;
  @Input() locationText:string;

  constructor() { }

  ngOnInit(): void {
  }

}
