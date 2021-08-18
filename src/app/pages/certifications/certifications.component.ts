import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/models/certificate';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certificateList:Certificate[];

  popCertificate:Certificate;

  constructor(
    private certificateService:CertificateService
  ) { }

  ngOnInit(): void {
    this.loadCertificate();
  }

  public loadCertificate():void {
    this.certificateService.getCertificate().subscribe((data:Certificate[]) => {
      this.certificateList = data;
    });
  }

  showPop(popObj:Certificate):void {
    this.popCertificate = popObj;
  }

  getWindowWidth(): number {
    return window.innerWidth;
  }

}
