import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskModellingComponent } from './risk-modelling.component';

describe('RiskModellingComponent', () => {
  let component: RiskModellingComponent;
  let fixture: ComponentFixture<RiskModellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskModellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskModellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
