import { NgModule } from '@angular/core';
import { QualityassuranceRoutingModule } from './qualityassurance-routing.module';
import { QualityassuranceComponent } from './qualityassurance.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [QualityassuranceComponent],
  imports: [
    SharedModule,
    QualityassuranceRoutingModule
  ]
})
export class QualityassuranceModule { }
