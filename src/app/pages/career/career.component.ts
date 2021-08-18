import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  careerForm:FormGroup;

  thankYouText:string;

  wWidth:number;

  wHeight: number;

  constructor(
    private fb:FormBuilder,
    private renderer: Renderer2
    ) { }

  ngOnInit(): void {

    this.careerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      position: ['', [Validators.required]],
      additionalInfo:['']
    });

    this.removeElementFromFromContainer();

  }

  onSubmit():void {
    console.log(this.careerForm.value);
    this.careerForm.reset();
    this.thankYouText = 'Thank you for contacting us';
    this.showthank();
  }

  public showthank():void {
    setTimeout(() => {
      this.thankYouText = ' ';
    }, 2000);
  }

  public getWindowWidth():number {
    return window.innerWidth;
  }

  public getWindowHeight(): number {
    return window.innerHeight;
  }

  public removeElementFromFromContainer(): void {
    if(this.getWindowWidth() < 768) {
      const formContainer = document.getElementById('formContainer');
      formContainer.classList.remove('p-l-r-15');
    }
  }

}

