import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { TypeRequirement } from 'src/app/models/typerequirement';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  thankYouText:string;

  typeRequirement: TypeRequirement[];

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {

    this.contactForm = this.fb.group({
       name:['', [Validators.required]],
       email:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
       message:[''],
       typreRequirement: ['']
    });

    this.getTypeRequirement();
  }

  public onSubmit():void {
    console.log(this.contactForm.value);
    this.contactForm.reset();
    this.thankYouText = 'Thank you for contacting us';
    setTimeout(() => {
      this.thankYouText = ' ';
    }, 2000);
  }

  getTypeRequirement():void {
    this.typeRequirement = [
      {
        id:1,
        text:'Industrial Gearbox '
      },
      {
        id:2,
        text:'Crane Duty Gearbox'
      },
      {
        id:3,
        text:'Rolling Mill Gearbox'
      },
      {
        id:4,
        text:'Extruder Gearbox'
      },
      {
        id:5,
        text:'Agitator Gearbox'
      },
      {
        id:6,
        text:'Planetary Gearbox'
      },
      {
        id:7,
        text:'Belt Conveyor Gearbox'
      },
      {
        id:8,
        text:'Custom Built Gearbox'
      },
      {
        id:9,
        text:'Drop in Replacement Gearbox'
      },
      {
        id:10,
        text:'Loose Gears'
      },
      {
        id:11,
        text:'Gearbox Repairing and Servicing'
      },
      {
        id:12,
        text:'New Product Development'
      }
    ];
  }

  getWindowWidth(): number {
    return window.innerWidth;
  }

}
