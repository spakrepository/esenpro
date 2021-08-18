import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/component/banner/banner.component';
import { SliderComponent } from 'src/app/component/slider/slider.component';
import { HtmlsanitizationPipe } from 'src/app/pipes/htmlsanitization.pipe';
import { HeaderComponent } from 'src/app/component/header/header.component';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { SocialMediaComponent } from 'src/app/component/social-media/social-media.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapsDirective } from 'src/app/directives/collaps.directive';
import { SvgComponent } from 'src/app/component/svg/svg.component';
import { UtilitiesComponent } from 'src/app/component/utilities/utilities.component';
import { ChangebgtextcolorDirective } from 'src/app/directives/changebgtextcolor.directive';
import { NetworkpopComponent } from 'src/app/component/networkpop/networkpop.component';
import { MobnetworkComponent } from 'src/app/component/mobnetwork/mobnetwork.component';


@NgModule({
  declarations: [
     SliderComponent,
     BannerComponent,
     HeaderComponent,
     FooterComponent,
     SocialMediaComponent,
     HtmlsanitizationPipe,
     CollapsDirective,
     SvgComponent,
     UtilitiesComponent,
     ChangebgtextcolorDirective,
     NetworkpopComponent,
     MobnetworkComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    SliderComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    SocialMediaComponent,
    HtmlsanitizationPipe,
    ReactiveFormsModule,
    CollapsDirective,
    SvgComponent,
    UtilitiesComponent,
    ChangebgtextcolorDirective,
    NetworkpopComponent,
    MobnetworkComponent
  ]
})
export class SharedModule { }
