import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusniessComponent } from './busniess.component';

describe('BusniessComponent', () => {
  let component: BusniessComponent;
  let fixture: ComponentFixture<BusniessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusniessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusniessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
