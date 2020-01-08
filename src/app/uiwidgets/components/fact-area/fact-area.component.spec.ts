import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactAreaComponent } from './fact-area.component';

describe('FactAreaComponent', () => {
  let component: FactAreaComponent;
  let fixture: ComponentFixture<FactAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
