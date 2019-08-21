import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeFlammabilityComponent } from './landscape-flammability.component';

describe('LandscapeFlammabilityComponent', () => {
  let component: LandscapeFlammabilityComponent;
  let fixture: ComponentFixture<LandscapeFlammabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandscapeFlammabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeFlammabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
