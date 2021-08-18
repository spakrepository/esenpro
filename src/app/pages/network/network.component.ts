import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper.service';
import { Network } from 'src/app/models/network';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  currentNetwork: Network;
  network: Network;
  popImg: string;
  showNetworkTooltip:string;

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.network = Network.Domestic;
    this.currentNetwork = Network.Domestic;
    console.log(this.helperService.isMobile);
  }

  gotoNetwork(ntwork: string): void {
    if(ntwork == 'domestic') {
      this.network = Network.Domestic;
      this.currentNetwork = Network.Domestic;
    } else {
      this.network = Network.International;
      this.currentNetwork = Network.International;
    }
  }

  showPop(imgVal: string):void {
    this.popImg = imgVal;
  }

  getWindowWidth(): number {
    return window.innerWidth;
  }

}
