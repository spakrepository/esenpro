import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:'career',
    loadChildren: () => import('./pages/career/career.module').then(m => m.CareerModule)
  },
  {
    path:'events',
    loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule)
  },
  {
    path:'demo/:id',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
  },
  {
    path:'about-esenpro',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path:'service',
    loadChildren: () => import('./pages/service/service.module').then(m => m.ServiceModule)
  },
  {
    path:'product',
    loadChildren: () => import('./pages/latestproduct/latestproduct.module').then(m => m.LatestproductModule)
  },
  {
    path:'application/:id',
    loadChildren: () => import('./pages/application/application.module').then(m => m.ApplicationModule)
  },
  {
    path:'core-team',
    loadChildren:() => import('./pages/managementcoreteam/managementcoreteam.module').then(m => m.ManagementcoreteamModule)
  },
  {
    path:'infrastructure',
    loadChildren:() => import('./pages/infrastructure/infrastructure.module').then(m => m.InfrastructureModule)
  },
  {
    path:'certifications',
    loadChildren:() => import('./pages/certifications/certifications.module').then(m => m.CertificationsModule)
  },
  {
    path:'quality-&-assurance',
    loadChildren:() => import('./pages/qualityassurance/qualityassurance.module').then(m => m.QualityassuranceModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./pages/network/network.module').then(m => m.NetworkModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
