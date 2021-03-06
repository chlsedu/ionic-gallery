import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SlogoDetailComponent} from './slogo-detail/slogo-detail.component';
import {SlideDetailComponent} from './slide-detail/slide-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slogo',
    // component: SingPagesPage,
    children: [
      {
        path: 'slogo',
        component: SlogoDetailComponent
      }
    ]
  },
  {path: 'slide', component: SlideDetailComponent},
  {path: 'slogo', component: SlogoDetailComponent},
  {
    path: 'biz-item',
    loadChildren: () => import('./biz-item/biz-item.module').then(m => m.BizItemPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingPagesPageRoutingModule {
}
