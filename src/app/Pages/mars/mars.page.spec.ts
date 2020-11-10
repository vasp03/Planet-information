import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarsPage } from './mars.page';

describe('MarsPage', () => {
  let component: MarsPage;
  let fixture: ComponentFixture<MarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
