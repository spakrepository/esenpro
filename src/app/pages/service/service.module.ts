import { NgModule } from '@angular/core';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ServiceComponent],
  imports: [
    SharedModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
