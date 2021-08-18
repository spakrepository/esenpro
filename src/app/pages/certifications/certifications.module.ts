import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationsComponent } from './certifications.component';


@NgModule({
  declarations: [CertificationsComponent],
  imports: [
    SharedModule,
    CertificationsRoutingModule
  ]
})
export class CertificationsModule { }
