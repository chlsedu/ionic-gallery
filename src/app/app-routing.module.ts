import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sing-pages',
    loadChildren: () => import('./sing-pages/sing-pages.module').then( m => m.SingPagesPageModule)
  },
  {
    path: 'modal-map',
    loadChildren: () => import('./components/bizServices/checkout/modal-map/modal-map.module').then( m => m.ModalMapPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
