import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapOneComponent } from './cap-one.component';

describe('CapOneComponent', () => {
  let component: CapOneComponent;
  let fixture: ComponentFixture<CapOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
