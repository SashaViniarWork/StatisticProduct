import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstUsersComponent } from './add-const-users.component';

describe('AddConstUsersComponent', () => {
  let component: AddConstUsersComponent;
  let fixture: ComponentFixture<AddConstUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConstUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConstUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
