import { NgModule } from '@angular/core';
import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [CareerComponent],
  imports: [
    SharedModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }
