import { NgModule } from '@angular/core';
import { NetworkRoutingModule } from './network-routing.module';
import { NetworkComponent } from './network.component';
import { SharedModule } from '../../shared/shared/shared.module';


@NgModule({
  declarations: [NetworkComponent],
  imports: [
    SharedModule,
    NetworkRoutingModule
  ]
})
export class NetworkModule { }
