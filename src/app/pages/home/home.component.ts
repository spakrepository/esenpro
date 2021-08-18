import { Component, OnInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/models/application';
import { InnovationResearch } from 'src/app/models/innovationresearch';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  innovationResearchs: InnovationResearch[];

  showPopBackDrop: boolean = false;

  applications: Application[];

  innovationResearch: InnovationResearch;

  isToastVisible: boolean = false;

  toastHeading: string;

  constructor(
    private renderer: Renderer2,
    private applicationService:ApplicationService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loadInnovationResearchList();
    this.loadApplicationList();
  }

  loadInnovationResearchList():void {
    this.innovationResearchs = [
      {
        id:1,
        heading:'Research & Innovation',
        image:'../../../assets/img/innovation/1.png',
        paragraph:'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p> <p> t was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'
      },
      {
        id:2,
        heading:'Manufacture',
        image:'../../../assets/img/innovation/2.png',
        paragraph:'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p> <p> t was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'
      },
      {
        id:3,
        heading:'Quality',
        image:'../../../assets/img/innovation/3.png',
        paragraph:'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p> <p> t was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'
      },
      {
        id:4,
        heading:'Service',
        image:'../../../assets/img/innovation/4.png',
        paragraph:'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p> <p> t was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'
      }
    ];
  }

  loadApplicationList(): void {
    this.applicationService.getApplicationData().subscribe((data:Application[]) => {
      this.applications = data;
    });

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  gotoApplication(obj:any):void {
    if(obj.mapId == null || obj.mapId == undefined) {
      this.showToast();
      this.toastHeading = obj.name;
    } else {
      this.router.navigate(['/product'], {
        queryParams:{
          'headerId': obj.headerId,
          'subHeaderId': obj.subHeaderId,
          'id': obj.mapId
        }
      });
    }
  }

  innovationPopup(obj: InnovationResearch):void {
    //document.body.classList.add('shadowToBody');
    //this.showPopBackDrop = true;
    //document.getElementById('modalBox').style.display = 'block';
    //this.innovationResearch = obj;
  }

  closeInnovationPop():void {
    document.getElementById('modalBox').style.display = 'none';
    this.showPopBackDrop = false;
    document.body.classList.remove('shadowToBody');
  }

  showToast():void {
    var elem = document.getElementById("snackbar");
    elem.className = "show";
    setTimeout(function(){ elem.className = elem.className.replace("show", ""); }, 3000);
  }

  getWindowWidth(): number {
    let result = window.innerWidth;
    return result;
  }

}
