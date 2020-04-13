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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingPagesPageRoutingModule {
}
