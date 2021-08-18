import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QualityassuranceComponent } from './qualityassurance.component';

const routes: Routes = [
  {
    path:'',
    component:QualityassuranceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityassuranceRoutingModule { }
