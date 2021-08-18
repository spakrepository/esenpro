import { NgModule } from '@angular/core';
import { LatestproductRoutingModule } from './latestproduct-routing.module';
import { LatestproductComponent } from './latestproduct.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProducttextlengthPipe } from './producttextlength.pipe';


@NgModule({
  declarations: [LatestproductComponent, ProducttextlengthPipe],
  imports: [
    SharedModule,
    LatestproductRoutingModule
  ]
})
export class LatestproductModule { }
