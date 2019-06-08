import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapbodyComponent } from './capbody.component';

describe('CapbodyComponent', () => {
  let component: CapbodyComponent;
  let fixture: ComponentFixture<CapbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
