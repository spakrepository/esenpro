import { NgModule } from '@angular/core';
import { ManagementcoreteamRoutingModule } from './managementcoreteam-routing.module';
import { ManagementcoreteamComponent } from './managementcoreteam.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ManagementcoreteamComponent],
  imports: [
    SharedModule,
    ManagementcoreteamRoutingModule
  ]
})
export class ManagementcoreteamModule { }
