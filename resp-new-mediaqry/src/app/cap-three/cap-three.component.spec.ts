import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapThreeComponent } from './cap-three.component';

describe('CapThreeComponent', () => {
  let component: CapThreeComponent;
  let fixture: ComponentFixture<CapThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
