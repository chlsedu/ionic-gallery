import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BizItemPage } from './biz-item.page';

describe('BizItemPage', () => {
  let component: BizItemPage;
  let fixture: ComponentFixture<BizItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BizItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
