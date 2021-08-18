import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SocialMedia } from 'src/app/models/socialMedia';
import { SocialmediaService } from 'src/app/services/socialmedia.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  socialMedia: SocialMedia[];

  @Input() alignment?: string = 'right';

  @Input() paddingTop?: string = '15px';


  constructor(
    private socialmediaService: SocialmediaService
    ) {}

  ngOnInit(): void {
  }

  loadSocialMedia(): void {
    this.socialmediaService.getSocialMedia().subscribe((data) => {
      this.socialMedia = data;
    });
  }

}


