import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JordenPage } from './jorden.page';

describe('JordenPage', () => {
  let component: JordenPage;
  let fixture: ComponentFixture<JordenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JordenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JordenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
