import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {SlideComponent} from '../components/slide/slide.component';
import {HomeComponent} from '../components/bizServices/home/home.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{path: '', component: Tab1Page}])
  ],
  declarations: [Tab1Page, SlideComponent, HomeComponent]
})
export class Tab1PageModule {
}
