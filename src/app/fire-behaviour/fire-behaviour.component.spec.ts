import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireBehaviourComponent } from './fire-behaviour.component';

describe('FireBehaviourComponent', () => {
  let component: FireBehaviourComponent;
  let fixture: ComponentFixture<FireBehaviourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireBehaviourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
