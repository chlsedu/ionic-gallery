import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab3Page} from './tab3.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {PaymentComponent} from '../components/bizServices/payment/payment.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{path: '', component: Tab3Page}, {path: 'payment', component: PaymentComponent}])
  ],
  declarations: [Tab3Page, PaymentComponent]
})
export class Tab3PageModule {
}
