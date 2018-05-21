import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTotalComponent } from './change-total.component';

describe('ChangeTotalComponent', () => {
  let component: ChangeTotalComponent;
  let fixture: ComponentFixture<ChangeTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
