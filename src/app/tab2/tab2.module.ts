import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab2Page} from './tab2.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {CategoryComponent} from '../components/bizServices/category/category.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{path: '', component: Tab2Page}])
  ],
  declarations: [Tab2Page, CategoryComponent]
})
export class Tab2PageModule {
}
