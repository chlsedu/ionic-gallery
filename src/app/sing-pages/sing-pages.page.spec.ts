import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingPagesPage } from './sing-pages.page';

describe('SingPagesPage', () => {
  let component: SingPagesPage;
  let fixture: ComponentFixture<SingPagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingPagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
