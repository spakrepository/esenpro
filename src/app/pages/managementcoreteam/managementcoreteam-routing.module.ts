import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementcoreteamComponent } from './managementcoreteam.component';

const routes: Routes = [
  {
    path:'',
    component:ManagementcoreteamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementcoreteamRoutingModule { }
