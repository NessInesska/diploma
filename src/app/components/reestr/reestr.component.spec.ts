import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestrComponent } from './reestr.component';

describe('ReestrComponent', () => {
  let component: ReestrComponent;
  let fixture: ComponentFixture<ReestrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReestrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
