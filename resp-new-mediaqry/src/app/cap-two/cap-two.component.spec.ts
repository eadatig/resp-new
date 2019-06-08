import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapTwoComponent } from './cap-two.component';

describe('CapTwoComponent', () => {
  let component: CapTwoComponent;
  let fixture: ComponentFixture<CapTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
