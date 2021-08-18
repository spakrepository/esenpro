import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderService } from './services/header.service';
import { HttpClientModule } from '@angular/common/http';
import { SocialmediaService } from './services/socialmedia.service';
import { EventService } from './services/event.service';
import { ProductService } from './services/product.service';
import { SharedService } from './services/shared.service';
import { ApplicationService } from './services/application.service';
import { CertificateService } from './services/certificate.service';
import { CoreteamService } from './services/coreteam.service';
import { JourneyService } from './services/journey.service';
import { SharedModule } from './shared/shared/shared.module';
import { HelperService } from './helper.service';


@NgModule({

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],

  providers: [
    HeaderService,
    SocialmediaService,
    EventService,
    ProductService,
    SharedService,
    ApplicationService,
    CertificateService,
    CoreteamService,
    JourneyService,
    HelperService
  ],

  bootstrap: [AppComponent]

})
export class AppModule {
}
