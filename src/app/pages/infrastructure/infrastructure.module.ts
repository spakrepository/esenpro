import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { InfrastructureComponent } from './infrastructure.component';


@NgModule({
  declarations: [InfrastructureComponent],
  imports: [
    SharedModule,
    InfrastructureRoutingModule
  ]
})
export class InfrastructureModule { }
