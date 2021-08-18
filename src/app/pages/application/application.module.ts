import { NgModule } from '@angular/core';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    SharedModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
