import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestproductComponent } from './latestproduct.component';

const routes: Routes = [
  {
    path:'',
    component:LatestproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestproductRoutingModule { }
